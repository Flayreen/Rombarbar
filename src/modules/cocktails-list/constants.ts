import {IFilterData} from "@/types/filter/IFilterData.ts";

export const cocktailsFilters: IFilterData[] = [
    {
        title: "Категорія коктейлів",
        filterLabel: "category",
        filters: [
            { name: "Класичні", value: "classic" },
            { name: "Інтерпритована класика", value: "interpreted" },
            { name: "Популярні", value: "popular" },
            { name: "Шоти", value: "shots" },
            { name: "Безалкогольні", value: "non-alcohol" },
            { name: "Авторьскі", value: "author" }
        ]
    },
    {
        title: "Міцність",
        filterLabel: "strength",
        filters: [
            { name: "Міцні", value: "strong" },
            { name: "Середні", value: "medium" },
            { name: "Легкі", value: "easy" },
        ]
    },
    {
        title: "Смак",
        filterLabel: "taste",
        filters: [
            { name: "Гіркий", value: "bitter" },
            { name: "Кислий", value: "sour" },
            { name: "Солодкий", value: "sweet" },
            { name: "Пряний", value: "spicy" },
            { name: "Солодко-кислий", value: "sweet-sour" }
        ]
    },
    {
        title: "Основна база",
        filterLabel: "base",
        filters: [
            { name: "Лікер", value: "liquor" },
            { name: "Бренді", value: "brandy" },
            { name: "Водка", value: "vodka" },
            { name: "Джин", value: "gin" },
            { name: "Текіла", value: "tequila" },
            { name: "Вино", value: "wine" },
            { name: "Ром", value: "rum" }
        ]
    },
    {
        title: "Складність",
        filterLabel: "complexity",
        filters: [
            { name: "Легка", value: "easy" },
            { name: "Середня", value: "medium" },
            { name: "Складна", value: "hard" }
        ]
    }
];