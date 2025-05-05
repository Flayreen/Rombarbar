import {create} from "zustand/react";
import {ICocktail} from "@/types/cocktail/ICocktail.ts";
import cocktailsList from "../database/cocktails.json"
import {paginator, getPaginationData, getPageSizeByAdaptive} from "@/utils/paginator.ts";
import {IPagination} from "@/types/pagination/IPagination.ts";

export interface CocktailsState {
    cocktails: ICocktail[],
    pagination: IPagination,
    fetchCocktails: (filters?: Record<string, string[]>) => void;
    paginateCocktails: (filters?: Record<string, string[]>, page?: number) => void;
}

export const useCocktailsStore = create<CocktailsState>()((set) => ({
    cocktails: [],
    pagination: {} as IPagination,
    fetchCocktails: (filters?: Record<string, string[]>): void => {
        const appliedFilters = filters ?? {};

        const filteredCocktails = cocktailsList.filter(cocktail => {
            return Object.entries(appliedFilters).every(([key, filterValues]) => {
                if (!filterValues.length) return true;

                if (key === "base" || key === "category" || key === "complexity" || key === "taste" || key === "strength") {
                    const cocktailValues: string[] = cocktail.characteristics[key] || [];
                    return filterValues.some((value: string) => cocktailValues.includes(value));
                }
            });
        });

        set({
            cocktails: paginator(filteredCocktails, 1, getPageSizeByAdaptive(6, 6, 9)),
            pagination: getPaginationData(filteredCocktails, 1, getPageSizeByAdaptive(6, 6, 9))
        });
    },
    paginateCocktails: (filters?: Record<string, string[]>, page: number = 1): void => {
        const appliedFilters = filters ?? {};

        const filteredCocktails = cocktailsList.filter(cocktail => {
            return Object.entries(appliedFilters).every(([key, filterValues]) => {
                if (!filterValues.length) return true;

                if (key === "base" || key === "category" || key === "complexity" || key === "taste" || key === "strength") {
                    const cocktailValues: string[] = cocktail.characteristics[key] || [];
                    return filterValues.some((value: string) => cocktailValues.includes(value));
                }
            });
        });

        set({
            cocktails: paginator(filteredCocktails, page, getPageSizeByAdaptive(6, 6, 9)),
            pagination: getPaginationData(filteredCocktails, page, getPageSizeByAdaptive(6, 6, 9))
        });
    },
}));