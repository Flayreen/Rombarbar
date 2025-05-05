import {useEffect, useState} from "react";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {cn} from "@/lib/utils.ts";
import {IFilterData} from "@/types/filter/IFilterData.ts";
import {useMediaQuery} from "@/hooks/use-media-query.tsx";
import {Drawer, DrawerContent, DrawerTrigger} from "@/components/ui/drawer.tsx";
import {Button} from "@/components/ui/button.tsx";
import {SlidersHorizontal} from "lucide-react";
import StarDivider from "@/components/StarDivider.tsx";

interface IFilterProps {
    className?: string;
    filterData: IFilterData[];
    fetchFilterData: (filters?: Record<string, string[]>, page?: number) => void;
}

export default function Filters({ className, filterData, fetchFilterData }: IFilterProps) {
    const isDesktop: boolean = useMediaQuery("(min-width: 1024px)");
    const isMobile: boolean = useMediaQuery("(max-width: 640px)");

    const [initialFilter, setInitialFilter] = useState<Record<string, string[]>>(() =>
        filterData.reduce((acc: Record<string, string[]>, filter: IFilterData): Record<string, string[]> => {
            acc[filter.filterLabel] = [];
            return acc;
        }, {} as Record<string, string[]>)
    );

    const filterCocktails = (filterLabel: string, value: string): void => {
        setInitialFilter((prev: Record<string, string[]>) => {
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
    }, [initialFilter]);

    if (!isDesktop) {
        return (
            <Drawer direction={isMobile ? "bottom" : "right"}>
                <DrawerTrigger asChild>
                    <Button variant="ghost" className="text-base md:text-xl">
                        <SlidersHorizontal />
                        Фільтер
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <div className={cn("flex flex-col gap-4")}>
                        {filterData.map((filterBlock: IFilterData, index: number) => (
                            <div key={index} className="flex flex-col items-center gap-4">
                                <span className="text-xl">{filterBlock.title}</span>
                                <div className="grid grid-cols-2 gap-4 w-full">
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
                                <StarDivider className="text-primary bg-primary"/>
                            </div>
                        ))}
                    </div>
                </DrawerContent>
            </Drawer>
        )
    }


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