import CustomDashedBorderBase from "@/components/ui/custom-dashed-border.tsx";

interface CategoryCocktailCardProps {
    title: string;
    imageUrl: string;
}

export const CategoryCocktailCard = (
    {
        title,
        imageUrl
    } : CategoryCocktailCardProps) => {

    return (

        <div>
            <CustomDashedBorderBase className="w-full md:p-4 lg:p-8 h-fit">
                <div className="w-full flex flex-col items-center gap-3">
                    <div
                        className="h-[267px] md:h-[128px] lg:h-[180px] w-full bg-cover bg-center flex items-center justify-center"
                        style={{ backgroundImage: `url(${imageUrl})` }}
                        role="img"
                        aria-label={title}
                    >
                        <p className="font-display-georgia uppercase text-[12px] md:text-[24px] font-bold tracking-[0.1em] text-white shadow-base text-center">
                            {title}
                        </p>
                    </div>
                </div>
            </CustomDashedBorderBase>    
        </div>
    );
};