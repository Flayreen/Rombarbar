import {IPagination} from "@/types/pagination/IPagination.ts";

export function paginator<T>(array: T[], page: number, pageSize: number = 9): T[] {
    const startIndex: number = (page - 1) * pageSize;
    const endIndex: number = startIndex + pageSize;
    return array.slice(startIndex, endIndex);
}

export function getPaginationData<T>(array: T[], page: number, pageSize: number = 9): IPagination {
    const totalItems: number = array.length;
    const lastPage: number = Math.ceil(totalItems / pageSize);
    const hasNextPage: boolean = page < lastPage;
    const hasPreviousPage: boolean = page !== 1;

    return {
        currentPage: page,
        pageCount: pageSize,
        lastPage,
        hasNextPage,
        hasPreviousPage
    }
}

export function getPageSizeByAdaptive (mobileSize: number, tabletSize: number, desktopSize: number): number {
    const windowWidth: number = window.innerWidth;

    if (windowWidth >= 1024) {
        return desktopSize;
    } else if (windowWidth >= 640 && windowWidth < 1024) {
        return tabletSize;
    } else {
        return mobileSize;
    }
}