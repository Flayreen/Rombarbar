import { MobileLayout } from "../../layout/homepage/MobileLayout";
import { DesktopLayout } from "../../layout/homepage/DesktopLayout";

import { ICocktailId } from "@/types/homepage/ICocktailId";

interface RecommentedCocktailCardProps {
  id: ICocktailId | string;
  title: string;
  imageUrl: string;
  imageUrlFruit: string;
  ingredients: string[];
  method: string;
  subject: string;
}

export const RecommentedCocktailCard = (props: RecommentedCocktailCardProps) => {
  return (
    <div className="relative bg-primary py-5 overflow-hidden">
      <MobileLayout {...props} />
      <DesktopLayout {...props} />
    </div>
  );
};
