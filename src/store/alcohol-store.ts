import {create} from "zustand/react";
import {paginator, getPaginationData, getPageSizeByAdaptive} from "@/utils/paginator.ts";
import {IPagination} from "@/types/pagination/IPagination.ts";
import { IAlcoholList } from "@/types/alcohol/IAlcoholList";
import alcoholList from "../database/alcoholList.json"

export interface AlcoholState {
    alcohol: IAlcoholList[],
    pagination: IPagination,
    fetchAlcohol: () => void;
    paginateAlcohol: (page?: number) => void;
}

export const useAlcoholStore = create<AlcoholState>()((set) => ({
    alcohol: [],
    pagination: {} as IPagination,
    fetchAlcohol: (): void => {
        const filteredAlcohol: IAlcoholList[] = Object.values(alcoholList).flat();

        set({
            alcohol: paginator(filteredAlcohol, 1, getPageSizeByAdaptive(6, 9, 8)),
            pagination: getPaginationData(filteredAlcohol, 1, getPageSizeByAdaptive(6, 9, 8))
        });
    },
    paginateAlcohol: (page: number = 1): void => {
        const filteredAlcohol: IAlcoholList[] = Object.values(alcoholList).flat();

        set({
            alcohol: paginator(filteredAlcohol, page, getPageSizeByAdaptive(6, 9, 8)),
            pagination: getPaginationData(filteredAlcohol, page, getPageSizeByAdaptive(6, 9, 8))
        });
    },
}));