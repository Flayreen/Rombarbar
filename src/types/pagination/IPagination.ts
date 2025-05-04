export interface IPagination {
    currentPage: number;
    lastPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    pageCount: number;
}