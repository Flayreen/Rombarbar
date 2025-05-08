import cocktailsList from "../database/cocktails.json"
import {ICocktail} from "@/types/cocktail/ICocktail.ts";
import {useNavigate, useParams} from "react-router-dom";
import {NotFound} from "@/pages/NotFound.tsx";
import ArrowLeftIcon from "@/components/ui/arrows/ArrowLeftIcon.tsx";
import CustomDashedBorderBase from "@/components/ui/custom-dashed-border.tsx";
import {useMediaQuery} from "@/hooks/use-media-query.tsx";

export const CocktailRecipe = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isMobile: boolean = useMediaQuery("(max-width: 640px)");
    const currentCocktail: ICocktail | undefined = cocktailsList.find((cocktail: ICocktail) => cocktail.id === id);

    if (!currentCocktail) {
        return <NotFound/>
    }

    return (
        <div className="container">
            <div className="flex justify-between mt-6 md:mt-8 items-center">
                <button onClick={() => navigate(-1)} className="text-black transition-colors">
                    <ArrowLeftIcon className="w-7 h-7"/>
                </button>
                <div className="flex flex-col items-center gap-2">
                    <h2 className="font-display-georgia uppercase text-[16px] md:text-[24px] xl:text-[32px] font-bold tracking-[0.1em] text-primary">
                        {currentCocktail.title}
                    </h2>
                    <div className="w-28 h-0.25 bg-primary"></div>
                </div>
                <div className="w-7 h-7"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[72px] mt-6 md:mt-[56px] lg:mt-[64px]">
                <CustomDashedBorderBase className="md:p-4 lg:p-8" withoutBorders={isMobile}>
                    <img
                        className="aspect-[1.1/1] w-full object-cover rounded-[6px]"
                        src={currentCocktail.imageUrl}
                        alt={currentCocktail.title}
                    />
                </CustomDashedBorderBase>
            </div>
        </div>
    );
};