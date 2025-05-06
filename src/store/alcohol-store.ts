import {create} from "zustand/react";
import {paginator, getPaginationData, getPageSizeByAdaptive} from "@/utils/paginator.ts";
import {IPagination} from "@/types/pagination/IPagination.ts";
import {alcoholList, IAlcoholList} from "@/database/alcoholList.ts";

export interface AlcoholState {
    alcohol: IAlcoholList[],
    pagination: IPagination,
    fetchAlcohol: (filters?: Record<string, string[]>) => void;
    paginateAlcohol: (filters?: Record<string, string[]>, page?: number) => void;
}

export const useAlcoholStore = create<AlcoholState>()((set) => ({
    alcohol: [],
    pagination: {} as IPagination,
    fetchAlcohol: (filters?: Record<string, string[]>): void => {
        const appliedFilters = filters ?? {};

        const filteredAlcohol = alcoholList.filter((alcohol: IAlcoholList) => {
            return Object.entries(appliedFilters).every(([key, filterValues]) => {
                if (!filterValues.length) return true;

                if (key === "size" || key === "length" || key === "taste" || key === "weight") {
                    const alcoholValues: string[] = alcohol.characteristics[key] || [];
                    return filterValues.some((value: string) => alcoholValues.includes(value));
                }
            });
        });

        set({
            alcohol: paginator(filteredAlcohol, 1, getPageSizeByAdaptive(6, 9, 8)),
            pagination: getPaginationData(filteredAlcohol, 1, getPageSizeByAdaptive(6, 9, 8))
        });
    },
    paginateAlcohol: (filters?: Record<string, string[]>, page: number = 1): void => {
        const appliedFilters = filters ?? {};

        const filteredAlcohol = alcoholList.filter((alcohol: IAlcoholList) => {
            return Object.entries(appliedFilters).every(([key, filterValues]) => {
                if (!filterValues.length) return true;

                if (key === "size" || key === "length" || key === "taste" || key === "weight") {
                    const alcoholValues: string[] = alcohol.characteristics[key] || [];
                    return filterValues.some((value: string) => alcoholValues.includes(value));
                }
            });
        });

        set({
            alcohol: paginator(filteredAlcohol, page, getPageSizeByAdaptive(6, 9, 8)),
            pagination: getPaginationData(filteredAlcohol, page, getPageSizeByAdaptive(6, 9, 8))
        });
    },
}));