import {create} from "zustand/react";
import {paginator, getPaginationData, getPageSizeByAdaptive} from "@/utils/paginator.ts";
import {IPagination} from "@/types/pagination/IPagination.ts";
import brandGroupedList from "@/database/brandList.json";
import {IBrandGrouped} from "@/types/brand/IBrandGrouped.ts";

export interface BrandsState {
    brands: IBrandGrouped[],
    pagination: IPagination,
    fetchBrands: () => void;
    paginateBrands: (page?: number) => void;
}

export const useBrandsStore = create<BrandsState>()((set) => ({
    brands: [],
    pagination: {} as IPagination,
    fetchBrands: (): void => {
        const filteredBrands: IBrandGrouped[] = Object.values(brandGroupedList).flat();

        set({
            brands: paginator(filteredBrands, 1, getPageSizeByAdaptive(6, 9, 8)),
            pagination: getPaginationData(filteredBrands, 1, getPageSizeByAdaptive(6, 9, 8))
        });
    },
    paginateBrands: (page: number = 1): void => {
        const filteredBrands: IBrandGrouped[] = Object.values(brandGroupedList).flat();

        set({
            brands: paginator(filteredBrands, page, getPageSizeByAdaptive(6, 9, 8)),
            pagination: getPaginationData(filteredBrands, page, getPageSizeByAdaptive(6, 9, 8))
        });
    },
}));