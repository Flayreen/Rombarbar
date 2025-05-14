import cocktailsList from "../database/cocktails.json"
import {ICocktail} from "@/types/cocktail/ICocktail.ts";
import {useNavigate, useParams} from "react-router-dom";
import {NotFound} from "@/pages/NotFound.tsx";
import ArrowLeftIcon from "@/components/ui/arrows/ArrowLeftIcon.tsx";
import CustomDashedBorderBase from "@/components/ui/custom-dashed-border.tsx";
import {useMediaQuery} from "@/hooks/use-media-query.tsx";
import StarDivider from "@/components/StarDivider.tsx";
import {convertYouTubeLink} from "@/utils/convertYouTubeLink.ts";

export const CocktailRecipe = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const isMobile: boolean = useMediaQuery("(max-width: 640px)");
    const isTablet: boolean = useMediaQuery("(max-width: 1024px)");
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
                <CustomDashedBorderBase className="md:p-4 lg:p-8 h-fit" withoutBorders={isMobile}>
                    <img
                        className="aspect-[1.1/1] w-full object-cover rounded-[6px]"
                        src={currentCocktail.imageUrl}
                        alt={currentCocktail.title}
                    />
                </CustomDashedBorderBase>
                <CustomDashedBorderBase className="lg:p-8" withoutBorders={isTablet}>
                    <div className="flex flex-col gap-10 md:gap-8">
                        <div className="flex flex-col gap-5">
                            <span className="text-base md:text-xl lg:text-2xl">ІНГРЕДІЄНТИ:</span>
                            <div className="flex flex-col gap-1 md:gap-2">
                                {currentCocktail.ingredients.map((title: string, index: number) => (
                                    <p className="font-raleway font-light tracking-wide text-sm md:text-xl" key={index}>
                                        {title}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="flex md:hidden lg:flex flex-col gap-5">
                            <span className="text-base md:text-xl lg:text-2xl">МЕТОД ПРИГОТУВАННЯ:</span>
                            <div className="flex flex-col gap-1 md:gap-2">
                                <p className="font-raleway font-light tracking-wide text-sm md:text-xl">
                                    {currentCocktail.method}
                                </p>
                            </div>
                        </div>
                        <div className="flex md:hidden lg:flex flex-col gap-5">
                            <span className="text-base md:text-xl lg:text-2xl">ОПИС СМАКУ:</span>
                            <div className="flex flex-col gap-1 md:gap-2">
                                <p className="font-raleway font-light tracking-wide text-sm md:text-xl">
                                    {currentCocktail.tasteDescription}
                                </p>
                            </div>
                        </div>
                        <div className="flex md:hidden lg:flex flex-col gap-5">
                            <span className="text-base md:text-xl lg:text-2xl">ПОДАЧА:</span>
                            <div className="flex flex-col gap-1 md:gap-2">
                                <p className="font-raleway font-light tracking-wide text-sm md:text-xl">
                                    {currentCocktail.subject}
                                </p>
                            </div>
                        </div>
                    </div>
                </CustomDashedBorderBase>
            </div>

            <div className="hidden md:flex lg:hidden flex-col gap-10 mt-12">
                <div className="flex flex-col gap-5">
                    <span className="text-base md:text-xl lg:text-2xl">МЕТОД ПРИГОТУВАННЯ:</span>
                    <div className="flex flex-col gap-1 md:gap-2">
                        <p className="font-raleway font-light tracking-wide text-sm md:text-xl">
                            {currentCocktail.method}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="text-base md:text-xl lg:text-2xl">ОПИС СМАКУ:</span>
                    <div className="flex flex-col gap-1 md:gap-2">
                        <p className="font-raleway font-light tracking-wide text-sm md:text-xl">
                            {currentCocktail.tasteDescription}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="text-base md:text-xl lg:text-2xl">ПОДАЧА:</span>
                    <div className="flex flex-col gap-1 md:gap-2">
                        <p className="font-raleway font-light tracking-wide text-sm md:text-xl">
                            {currentCocktail.subject}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-12 md:gap-[80px] lg:gap-[100px] mt-12 md:mt-[80px] lg:mt-[100px]">
                <StarDivider variant="dark"/>
                <div className="flex flex-col items-center gap-6 md:gap-10 lg:gap-12 max-w-[500px] w-full">
                    <div className="flex flex-col items-center gap-2">
                        <span className="font-display-georgia uppercase text-[16px] md:text-[24px] md:font-bold tracking-[0.1em] text-primary">
                            ВІДЕОІНСТРУКЦІЯ
                        </span>
                    <div className="w-28 h-0.25 bg-primary"></div>
                    </div>
                    <iframe
                        src={convertYouTubeLink(currentCocktail.videoLink)}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        className="w-full aspect-[2/1]"
                        allowFullScreen
                    ></iframe>
                </div>
                <StarDivider variant="dark"/>
            </div>

            <div className="flex flex-col items-center gap-12 md:gap-[80px] lg:gap-[100px] mt-12">
                <div className="flex flex-col items-center gap-2">
                    <span
                        className="font-display-georgia uppercase text-[16px] md:text-[24px] md:font-bold tracking-[0.1em] text-primary">
                        РЕКОМЕНДУЄМО
                    </span>
                    <div className="w-28 h-0.25 bg-primary"></div>
                </div>
                // TODO: add recommended cocktails
            </div>
        </div>
    );
};