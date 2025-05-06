import {useEffect, useState} from "react";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {cn} from "@/lib/utils.ts";
import {IFilterData} from "@/types/filter/IFilterData.ts";
import {useMediaQuery} from "@/hooks/use-media-query.tsx";
import {Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger} from "@/components/ui/drawer.tsx";
import {Button} from "@/components/ui/button.tsx";
import {SlidersHorizontal, X} from "lucide-react";
import StarDivider from "@/components/StarDivider.tsx";
import {DialogTitle} from "@radix-ui/react-dialog";
import {useSearchParams} from "react-router-dom";

interface IFilterProps {
    className?: string;
    initialState: Record<string, string[]>;
    filterData: IFilterData[];
    fetchFilterData: (filters?: Record<string, string[]>, page?: number) => void;
}

export default function Filters({ className, initialState, filterData, fetchFilterData }: IFilterProps) {
    const isDesktop: boolean = useMediaQuery("(min-width: 1024px)");
    const isMobile: boolean = useMediaQuery("(max-width: 640px)");
    const [,setSearchParams] = useSearchParams();

    const [initialFilter, setInitialFilter] = useState<Record<string, string[]>>(initialState);

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
        setSearchParams(initialFilter);
    }, [initialFilter]);

    if (!isDesktop) {
        return (
            <Drawer direction={isMobile ? "bottom" : "right"}>
                <DrawerTrigger asChild>
                    <Button variant="ghost" className="text-base md:text-xl">
                        <SlidersHorizontal />Фільтер
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="px-4">
                    <DrawerHeader className="flex flex-row justify-between gap-2 px-0">
                        <DialogTitle className="flex items-center gap-2 text-base md:text-lg">
                            <SlidersHorizontal size={20} />Фільтер
                        </DialogTitle>
                        <DrawerClose className="cursor-pointer" asChild>
                            <div className="flex items-center">
                                <X size={20}/>
                            </div>
                        </DrawerClose>
                    </DrawerHeader>
                    <div className="overflow-scroll py-2">
                        <div className={cn("flex flex-col gap-4")}>
                            {filterData.map((filterBlock: IFilterData, index: number) => (
                                <div key={index} className="flex flex-col items-center gap-4">
                                    <span className="text-base text-primary">{filterBlock.title}</span>
                                    <div className="grid grid-cols-2 gap-4 w-full">
                                        {filterBlock.filters.map((filter, index) => (
                                            <div
                                                role="button"
                                                key={index}
                                                className="flex items-center space-x-2 w-fit cursor-pointer"
                                                onClick={() => filterCocktails(filterBlock.filterLabel, filter.value)}
                                            >
                                                <Checkbox id={filter.value} checked={initialFilter[filterBlock.filterLabel].includes(filter.value)} />
                                                <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                    {filter.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    {(filterData.length !== index + 1) && (
                                        <StarDivider variant="dark" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
        )
    }

    return (
        <div className={cn("flex flex-row gap-4 justify-between w-full", className)}>
            {filterData.map((filterBlock: IFilterData, index: number) => (
                <div key={index} className="flex flex-col gap-8">
                    <span className="text-xl">{filterBlock.title}</span>
                    <div className="flex flex-col gap-4 w-fit">
                        {filterBlock.filters.map((filter, index: number) => (
                            <div
                                role="button"
                                key={index}
                                className="flex items-center space-x-2 w-fit p-0 h-fit cursor-pointer"
                                onClick={() => filterCocktails(filterBlock.filterLabel, filter.value)}
                            >
                                <Checkbox id={filter.value} checked={initialFilter[filterBlock.filterLabel].includes(filter.value)} />
                                <span className="text-lg font-extralight leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    {filter.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}