export const IngredientsList = ({ ingredients }: { ingredients: string[] }) => (
    <section className="flex flex-col items-center xl:items-start gap-7 mt-10 relative z-10">
      <h3 className="font-display-georgia w-full uppercase text-[24px] xl:text-[32px] tracking-[0.18em] text-white">
        Інгредієнти:
      </h3>
      <div className="w-full">
        {ingredients.map((ingredient, index) => (
          <p
            key={index}
            className="font-raleway text-[14px] xl:text-[20px] tracking-[0.1em] leading-[1.8] text-white"
          >
            {ingredient}
          </p>
        ))}
      </div>
    </section>
);
  
export const Method = ({ method }: { method: string }) => (
    <section className="flex flex-col items-center xl:items-start gap-7 mt-10 relative z-10">
      <h3 className="font-display-georgia w-full uppercase text-[24px] xl:text-[32px] tracking-[0.18em] text-white">
        Метод приготування:
      </h3>
      <p className="font-raleway w-full text-[14px] xl:text-[20px] tracking-[0.1em] leading-[1.8] text-white">
        {method}
      </p>
    </section>
);
  
export const Serving = ({ subject }: { subject: string }) => (
    <section className="flex flex-col items-center xl:items-start gap-7 mt-10 relative z-10">
      <h3 className="font-display-georgia w-full uppercase text-[24px] xl:text-[32px] tracking-[0.18em] text-white">
        Подача:
      </h3>
      <p className="font-raleway w-full text-[14px] xl:text-[20px] tracking-[0.1em] leading-[1.8] text-white">
        {subject}
      </p>
    </section>
);
  