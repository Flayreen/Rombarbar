import { IngredientsList, Method, Serving } from "../../components/ui/homepage/Sections";
import { FruitBackground } from "@/components/ui/homepage/FruitBackground";
import { getColors } from "@/utils/recCocColors";

interface MobileLayoutProps {
  id: string;
  title: string;
  imageUrl: string;
  imageUrlFruit: string;
  ingredients: string[];
  method: string;
  subject: string;
  fruitStyles?: any[];
}

export const MobileLayout = ({
  id,
  title,
  imageUrl,
  imageUrlFruit,
  ingredients,
  method,
  subject,
  fruitStyles = [],
}: MobileLayoutProps) => {
  const colorStyle = getColors(id);

  return (
    <div className="xl:hidden container">
      <FruitBackground imageUrl={imageUrlFruit} styles={fruitStyles} />
      <div className="flex flex-col items-center gap-2 mt-10">
        <h2
          className="font-display-georgia uppercase text-[16px] md:text-[24px] xl:text-[32px] font-bold tracking-[0.1em]"
          style={{ color: colorStyle.color }}
        >
          {title}
        </h2>
        <div className="w-28 h-px" style={{ backgroundColor: colorStyle.bg }}></div>
      </div>
      <div className="flex flex-col items-center md:flex-row-reverse gap-6 mt-6">
        <img
          className="w-[50vw] max-w-[250px] md:max-w-[350px]"
          src={imageUrl}
          alt={title}
        />
        <div className="flex flex-col">
          <IngredientsList ingredients={ingredients} />
          <Method method={method} />
          <Serving subject={subject} />
        </div>
      </div>
    </div>
  );
};
