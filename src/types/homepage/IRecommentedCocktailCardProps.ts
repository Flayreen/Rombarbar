import { ICocktailId } from "./ICocktailId";
import { IFruitStyle } from "./IFruitStyle";

// Інтерфейс для картки рекомендованого коктейлю
export interface IRecommentedCocktailCardProps {
  id: ICocktailId | string;
  title: string;
  imageUrl: string;
  imageUrlFruit: string;
  ingredients: string[];
  method: string;
  subject: string;
  fruitStyles?: IFruitStyle[];
}
