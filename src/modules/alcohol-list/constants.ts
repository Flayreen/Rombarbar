import {IFilterData} from "@/types/filter/IFilterData.ts";

export const alcoholFilters: IFilterData[] = [
    {
        title: "Розмір балди",
        filterLabel: "size",
        filters: [
            { name: "XL", value: "xl" },
            { name: "XXL", value: "xxl" },
            { name: "XXXL", value: "xxxl" },
        ]
    },
    {
        title: "Довжина балди",
        filterLabel: "length",
        filters: [
            { name: "18 см", value: "18" },
            { name: "20 см", value: "20" },
        ]
    },
    {
        title: "Смак балди",
        filterLabel: "taste",
        filters: [
            { name: "Дуже смачна", value: "very-taste" },
            { name: "Кисла", value: "sour" },
            { name: "Ням ням", value: "nyam-nyam" },
        ]
    },
    {
        title: "Вага балди",
        filterLabel: "weight",
        filters: [
            { name: "30 кг", value: "30" },
            { name: "40 кг", value: "40" },
            { name: "50 кг", value: "50" },
        ]
    },
];