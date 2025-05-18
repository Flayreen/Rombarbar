import { IFruitBackgroundProps } from "@/types/homepage/IFruitBackgroundProps";

export const FruitBackground = ({ imageUrl, styles }: IFruitBackgroundProps) => {
  return (
    <>
      {styles.map((style, i) => (
        <img
          key={i}
          src={imageUrl}
          alt=""
          aria-hidden="true"
          className="absolute z-0 opacity-100 pointer-events-none select-none"
          style={style}
          draggable={false}
        />
      ))}
    </>
  );
};
