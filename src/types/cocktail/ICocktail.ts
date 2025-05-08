import {IFilterCharacteristics} from "@/types/cocktail/IFilterCharacteristics.ts";

export interface ICocktail {
    id: string;
    title: string;
    imageUrl: string;
    characteristics: IFilterCharacteristics;
    ingredients: string[];
    method: string;
    subject: string;
    videoLink: string;
}