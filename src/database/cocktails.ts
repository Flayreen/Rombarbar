export interface ICocktail {
    id: string;
    title: string;
    imageUrl: string;
    characteristics: {
        category: TCocktailsCategory;
        strength: TCocktailsStrength;
        taste: TCocktailsTaste;
        base: TCocktailsBase;
        complexity: TCocktailsComplexity;
    }
}

export interface ICocktailFilters {
    title: string;
    filterLabel: TCocktailsLabel;
    filters: {
        name: string,
        value: FilterValueType<TCocktailsLabel>,
    }[];
}

type FilterValueType<T extends TCocktailsLabel> =
    T extends "category" ? TCocktailsCategory :
    T extends "strength" ? TCocktailsStrength :
    T extends "taste" ? TCocktailsTaste :
    T extends "base" ? TCocktailsBase :
    T extends "complexity" ? TCocktailsComplexity :
    never;

export type TCocktailsLabel = "category" | "strength" | "taste" | "base" | "complexity";
export type TCocktailsCategory = "classic" | "interpreted-classics" | "popular" | "shots" | "non-alcohol" | "author";
export type TCocktailsStrength = "easy" | "medium" | "strong";
export type TCocktailsTaste = "bitter" | "sour" | "sweet" | "spicy" | "sweet-sour";
export type TCocktailsBase = "liquor" | "brandy" | "vodka" | "gin" | "tequila" | "wine" | "rum";
export type TCocktailsComplexity = "easy" | "medium" | "hard";




export const cocktails: ICocktail[] = [
    {
        id: "aperol",
        title: "Апероль",
        imageUrl: "/assets/images/cocktails/bloody-mary.png",
        characteristics: {
            category: "classic",
            base: "gin",
            complexity: "medium",
            strength: "medium",
            taste: "spicy",
        }
    },
    {
        id: "bloody-mary",
        title: "Кровава Мері",
        imageUrl: "/assets/images/cocktails/bloody-mary.png",
        characteristics: {
            category: "interpreted-classics",
            base: "gin",
            complexity: "hard",
            strength: "strong",
            taste: "sour",
        }
    },
    {
        id: "cosmopolitan",
        title: "Космополітан",
        imageUrl: "/assets/images/cocktails/bloody-mary.png",
        characteristics: {
            category: "popular",
            base: "vodka",
            complexity: "easy",
            strength: "easy",
            taste: "sweet-sour",
        }
    },
    {
        id: "djin-tonic",
        title: "Джин Тонік",
        imageUrl: "/assets/images/cocktails/bloody-mary.png",
        characteristics: {
            category: "shots",
            base: "rum",
            complexity: "hard",
            strength: "medium",
            taste: "sweet",
        }
    },
    {
        id: "margarita",
        title: "Маргарита",
        imageUrl: "/assets/images/cocktails/bloody-mary.png",
        characteristics: {
            category: "author",
            base: "liquor",
            complexity: "hard",
            strength: "strong",
            taste: "sour",
        }
    },
]


export const cocktailFilters: ICocktailFilters[] = [
    {
        title: "Категорія коктейлів",
        filterLabel: "category",
        filters: [
            { name: "Класичні", value: "classic" },
            { name: "Інтерпритована класика", value: "interpreted-classics" },
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