import { useEffect, useState } from "react";

interface RecommentedCocktailCardProps {
  id: string;
  title: string;
  imageUrl: string;
  imageUrlFruit: string;
  ingredients: string[];
  method: string;
  subject: string;
}

export const RecommentedCocktailCard = ({
  id,
  title,
  imageUrl,
  imageUrlFruit,
  ingredients,
  method,
  subject,
}: RecommentedCocktailCardProps) => {
  const [screenWidth, setScreenWidth] = useState(1024);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setScreenWidth(window.innerWidth);
      setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const generateRandomStyles = () => {
    let size = 30;

    if (screenWidth < 640) {
      size = 10 + Math.random() * 10; // mobile
    } else if (screenWidth < 1024) {
      size = 20 + Math.random() * 20; // tablet
    } else {
      size = 30 + Math.random() * 30; // desktop
    }

    return {
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
      width: `${size}px`,
      transform: `rotate(${Math.random() * 360}deg)`,
    };
  };

  const fruitElements = Array.from({ length: 6 }, (_, i) => {
    const style = generateRandomStyles();
    return (
      <img
        key={i}
        src={imageUrlFruit}
        alt=""
        className="absolute z-0 opacity-100 pointer-events-none"
        style={style}
      />
    );
  });

  const getTitleColorStyle = (id: string) => {
    switch (id) {
      case "bloody-mary":
        return { color: "#DB1F13" }; 
      case "blue-lagoon":
        return { color: "#048AAC" };
      case "green-kiwi":
        return { color: "#CFE044" }; 
      default:
        return { color: "#FFFFFF" }; 
    }
  };

  const getTitleColorStyleBg = (id: string) => {
    switch (id) {
      case "bloody-mary":
        return { backgroundColor: "#DB1F13" }; 
      case "blue-lagoon":
        return { backgroundColor: "#048AAC" }; 
      case "green-kiwi":
        return { backgroundColor: "#CFE044" };
      default:
        return { backgroundColor: "#FFFFFF" };
    }
  };

  return (
    <div className="relative container bg-primary py-5 overflow-hidden">
      <div className="xl:hidden">
        {fruitElements}
        <div className="flex flex-col items-center gap-2 mt-10">
          <h2
            className={`font-display-georgia uppercase text-[16px] md:text-[24px] xl:text-[32px] font-bold tracking-[0.1em])}`}
            style={getTitleColorStyle(id)}
          >
            {title}
          </h2>
          <div className="w-28 h-px" style={getTitleColorStyleBg(id)}></div>
        </div>
        <div className="flex flex-col items-center md:flex-row-reverse">
          <img className="w-[50vw] max-w-[250px] md:max-w-[350px]" src={imageUrl} alt={title} />
          <div className="flex flex-col">
            <div className="flex flex-col items-center gap-7 mt-10 relative z-10">
              <h3 className="font-display-georgia md:w-full uppercase text-[16px] md:text-[24px] tracking-[0.18em] text-white">
                Інгредієнти:
              </h3>
              <div className="w-full">
                {ingredients.map((ingredient, index) => (
                  <p
                    key={index}
                    className="font-raleway text-[12px] md:text-[20px] xl:text-[24px] tracking-[0.1em] leading-[1.8] text-white"
                  >
                    {ingredient}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center gap-7 mt-10 relative z-10">
              <h3 className="font-display-georgia md:w-full uppercase text-[16px] md:text-[24px] tracking-[0.18em] text-white">
                Метод приготування:
              </h3>
              <p className="font-raleway w-full text-[12px] md:text-[20px] xl:text-[24px] tracking-[0.1em] leading-[1.8] text-white">
                {method}
              </p>
            </div>
            <div className="flex flex-col items-center gap-7 mt-10 relative z-10">
              <h3 className="font-display-georgia md:w-full uppercase text-[16px] md:text-[24px] tracking-[0.18em] text-white">
                Подача:
              </h3>
              <p className="font-raleway w-full text-[12px] md:text-[20px] xl:text-[24px] tracking-[0.1em] leading-[1.8] text-white">
                {subject}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden xl:block">
        {fruitElements}
        <div className="flex flex-col items-center gap-2 mt-10">
          <h2
            className={`font-display-georgia uppercase text-[16px] md:text-[24px] xl:text-[32px] font-bold tracking-[0.1em]
            )}`}
            style={getTitleColorStyle(id)}
          >
            {title}
          </h2>
          <div className="w-28 h-0.25 bg-white"></div>
        </div>
        <div className="flex mt-10 mb-20">
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col items-center gap-7 mt-10 relative z-10">
              <h3 className="font-display-georgia w-full uppercase text-[32px] tracking-[0.18em] text-white">
                Подача:
              </h3>
              <p className="font-raleway w-full text-[20px] tracking-[0.1em] leading-[1.8] text-white">
                {subject}
              </p>
            </div>
            <div className="flex flex-col items-center gap-7 mt-10 relative z-10">
              <h3 className="font-display-georgia w-full uppercase text-[32px] tracking-[0.18em] text-white">
                Інгредієнти:
              </h3>
              <div className="w-full">
                {ingredients.map((ingredient, index) => (
                  <p
                    key={index}
                    className="font-raleway text-[20px] tracking-[0.1em] leading-[1.8] text-white"
                  >
                    {ingredient}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <img className="flex-1 w-[50vw] max-w-[464px]" src={imageUrl} alt={title} />
          <div className="flex-1 flex flex-col items-center gap-7 mt-10 relative z-10">
            <h3 className="font-display-georgia w-full uppercase text-[32px] tracking-[0.18em] text-white">
              Метод приготування:
            </h3>
            <p className="font-raleway w-full text-[20px] tracking-[0.1em] leading-[1.8] text-white">
              {method}
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};
