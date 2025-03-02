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
            <div className="">
                <img
                    className="min-h-[244px] object-cover"
                    src={imageUrl}
                    alt={title}
                />
            </div>

            <p className="text-center text-base sm:text-lg md:text-2xl lg:text-[28px] font-light">
                {title}
            </p>
        </div>
    );
};