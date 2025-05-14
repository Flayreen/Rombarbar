import { IBrandGroupedFilterCharacteristics } from "./IBrandGroupedFilterCharacteristics";
import { IBrandList } from "./IBrandList";

export interface IBrandGrouped {
    id: string;
    title: string;
    variations: IBrandList[];
    characteristics: IBrandGroupedFilterCharacteristics;
}

