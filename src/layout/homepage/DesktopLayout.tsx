import { IngredientsList, Method, Serving } from "../../components/ui/homepage/Sections";
import { FruitBackground } from "@/components/ui/homepage/FruitBackground";
import { getColors } from "@/utils/recCocColors";

interface DesktopLayoutProps {
  id: string;
  title: string;
  imageUrl: string;
  imageUrlFruit: string;
  ingredients: string[];
  method: string;
  subject: string;
  fruitStyles?: any[];
}

export const DesktopLayout = ({
  id,
  title,
  imageUrl,
  imageUrlFruit,
  ingredients,
  method,
  subject,
  fruitStyles = [],
}: DesktopLayoutProps) => {
  const colorStyle = getColors(id);

  return (
    <div className="hidden xl:block container">
      <FruitBackground imageUrl={imageUrlFruit} styles={fruitStyles} />
      <div className="flex flex-col items-center gap-2 mt-10 z-10">
        <h2
          className="font-display-georgia uppercase font-bold tracking-[0.1em] text-[32px]"
          style={{ color: colorStyle.color }}
        >
          {title}
        </h2>
        <div className="w-28 h-0.25" style={{ backgroundColor: colorStyle.bg }}></div>
      </div>
      <div className="flex items-start gap-10 mt-10 mb-20 z-10">
        <div className="flex-1 flex flex-col gap-10">
          <IngredientsList ingredients={ingredients} />
          <Serving subject={subject} />
        </div>
        <div className="flex-1 flex justify-center">
          <img className="w-[60vw] max-w-[464px]" src={imageUrl} alt={title} draggable={false} />
        </div>
        <div className="flex-1">
          <Method method={method} />
        </div>
      </div>
    </div>
  );
};
