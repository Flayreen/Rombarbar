interface CocktailCardProps {
    title: string;
    imageUrl: string;
}

export const CocktailCard = (
    {
        title,
        imageUrl
    } : CocktailCardProps) => {

    return (
        <div className="w-full flex flex-col items-center gap-3">
            <img
                className="h-[220px] md:h-[400px] lg:h-[500px] w-full object-cover"
                src={imageUrl}
                alt={title}
            />

            <p className="text-center text-base sm:text-lg md:text-2xl lg:text-[28px] font-light">
                {title}
            </p>
        </div>
    );
};