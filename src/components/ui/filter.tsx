import {useEffect, useState} from "react";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {cn} from "@/lib/utils.ts";
import {IFilterData} from "@/types/filter/IFilterData.ts";

interface IFilterProps {
    className?: string;
    filterData: IFilterData[];
    fetchFilterData: (filters?: Record<string, string[]>) => void;
}

export default function Filters({ className, filterData, fetchFilterData }: IFilterProps) {
    const [initialFilter, setInitialFilter] = useState<Record<string, string[]>>(() =>
        filterData.reduce((acc, filter) => {
            acc[filter.filterLabel] = [];
            return acc;
        }, {} as Record<string, string[]>)
    );

    const filterCocktails = (filterLabel: string, value: string): void => {
        setInitialFilter(prev => {
            const currentValues: string[] = prev[filterLabel] || [];

            const updatedValues: string[] = currentValues.includes(value)
                ? currentValues.filter(item => item !== value)
                : [...currentValues, value];

            return {
                ...prev,
                [filterLabel]: updatedValues,
            };
        });
    };

    useEffect(() => {
        fetchFilterData(initialFilter);
    }, [initialFilter, fetchFilterData]);

    return (
        <div className={cn("flex flex-row gap-4 justify-between", className)}>
            {filterData.map((filterBlock: IFilterData, index: number) => (
                <div key={index} className="flex flex-col gap-8">
                    <span className="text-xl">{filterBlock.title}</span>
                    <div className="flex flex-col gap-4 w-fit">
                        {filterBlock.filters.map((filter, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-2 w-fit"
                                onClick={() => filterCocktails(filterBlock.filterLabel, filter.value)}
                            >
                                <Checkbox id={filter.value} checked={initialFilter[filterBlock.filterLabel].includes(filter.value)} />
                                <label
                                    htmlFor={filter.value}
                                    className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    {filter.name}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}