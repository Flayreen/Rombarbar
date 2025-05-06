export interface IFilterData {
    title: string;
    filterLabel: string;
    filters: {
        name: string,
        value: string,
    }[];
}