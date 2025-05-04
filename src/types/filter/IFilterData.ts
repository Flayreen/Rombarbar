export type TCocktailsLabel = "category" | "strength" | "taste" | "base" | "complexity";

export interface IFilterData {
    title: string;
    filterLabel: TCocktailsLabel;
    filters: {
        name: string,
        value: string,
    }[];
}