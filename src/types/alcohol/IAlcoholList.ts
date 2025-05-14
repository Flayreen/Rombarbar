import { IAlcoholListFilterCharacteristics } from "./IAlcoholListFilterCharacteristics";

export interface IAlcoholList {
    id: string;
    title: string;
    whatIsIt: string;
    history: string;
    types: string;
    howToDrink: string;
    facts: string;
    characteristics: IAlcoholListFilterCharacteristics;
}


