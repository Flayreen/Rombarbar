import {create} from "zustand/react";
import {paginator, getPaginationData, getPageSizeByAdaptive} from "@/utils/paginator.ts";
import {IPagination} from "@/types/pagination/IPagination.ts";
import {brandGroupedList, IBrandGrouped} from "@/database/brandList.ts";

export interface BrandsState {
    brands: IBrandGrouped[],
    pagination: IPagination,
    fetchBrands: (filters?: Record<string, string[]>) => void;
    paginateBrands: (filters?: Record<string, string[]>, page?: number) => void;
}

export const useBrandsStore = create<BrandsState>()((set) => ({
    brands: [],
    pagination: {} as IPagination,
    fetchBrands: (filters?: Record<string, string[]>): void => {
        const appliedFilters = filters ?? {};

        const filteredBrands = brandGroupedList.filter((brand: IBrandGrouped) => {
            return Object.entries(appliedFilters).every(([key, filterValues]) => {
                if (!filterValues.length) return true;

                if (key === "size" || key === "length" || key === "taste" || key === "weight") {
                    const brandValues: string[] = brand.characteristics[key] || [];
                    return filterValues.some((value: string) => brandValues.includes(value));
                }
            });
        });

        set({
            brands: paginator(filteredBrands, 1, getPageSizeByAdaptive(6, 9, 8)),
            pagination: getPaginationData(filteredBrands, 1, getPageSizeByAdaptive(6, 9, 8))
        });
    },
    paginateBrands: (filters?: Record<string, string[]>, page: number = 1): void => {
        const appliedFilters = filters ?? {};

        const filteredBrands = brandGroupedList.filter((brand: IBrandGrouped) => {
            return Object.entries(appliedFilters).every(([key, filterValues]) => {
                if (!filterValues.length) return true;

                if (key === "size" || key === "length" || key === "taste" || key === "weight") {
                    const brandValues: string[] = brand.characteristics[key] || [];
                    return filterValues.some((value: string) => brandValues.includes(value));
                }
            });
        });

        set({
            brands: paginator(filteredBrands, page, getPageSizeByAdaptive(6, 9, 8)),
            pagination: getPaginationData(filteredBrands, page, getPageSizeByAdaptive(6, 9, 8))
        });
    },
}));