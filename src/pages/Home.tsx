import InstagramLogo from "../../public/assets/svgs/social/instagram-logo.svg";
import TiktokLogo from "../../public/assets/svgs/social/tiktok-logo.svg";
import FacebookLogo from "../../public/assets/svgs/social/facebook-logo.svg";
import { cocktailsFilters } from "@/modules/cocktails-list/constants";
import { Link } from "react-router-dom";
import { CategoryCocktailCard } from "@/components/cards/CategoryCoctailCard";
import { CocktailCard } from "@/components/cards/CocktailCard";
import { useEffect, useState } from "react";
import cocktailsList from "@/database/cocktails.json";
import CustomDashedBorderBase from "@/components/ui/custom-dashed-border.tsx";
import {useMediaQuery} from "@/hooks/use-media-query.tsx";
import { RecommentedCocktailCard } from "@/components/cards/RecommendedCoctailCard";
import FixedImageUntilTarget from "@/components/cards/FixedImageUntilTarget";

const categoryFilter = cocktailsFilters.find(
    (filter) => filter.filterLabel === "category"
);

function useWindowWidth() {
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return width;
}

export const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    if (!categoryFilter) return null;

    const width = useWindowWidth();

    let count = 3;
    if (width < 768) count = 2;       // мобілка
    else if (width < 1280) count = 2;  // планшет
    else if (width < 1920) count = 3; // ноут
  
    const firstFourCocktails = cocktailsList.slice(0, 3);
    const visibleCocktails = firstFourCocktails.slice(0, count);

    const selectedCocktailsIds = ['bloody-mary', 'blue-lagoon', 'green-kiwi']; 

    const selectedCocktails = cocktailsList.filter(cocktail => selectedCocktailsIds.includes(cocktail.id));

    const isMobile: boolean = useMediaQuery("(max-width: 640px)");
    
    
    
    return (
        <div>
            <div className="absolute h-[100vh] w-full top-0 z-10">
                <img
                    src="/assets/images/home/hero.png"
                    loading="eager"
                    alt="Hero"
                    className="h-full w-full object-[30%_center] object-cover"
                />
                <img
                    src="/assets/images/logo.png"
                    alt="Logo"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[40vw] xl:w-[25vw]"
                />
            </div>
            <FixedImageUntilTarget
                imageUrls={[
                    '/assets/images/home/RecommentedCoctail/bloody-mary.png',
                    '/assets/images/home/RecommentedCoctail/blue-lagoon.png',
                    '/assets/images/home/RecommentedCoctail/green-kiwi.png'
                ]}
                sectionIds={['cocktail-0', 'cocktail-1', 'cocktail-2']}
                targetId="stop-block"
            />
            <div className="mt-[100vh]">
                <div className="flex flex-col items-center gap-2 mb-8">
                    <h2 className="font-display-georgia uppercase text-[16px] md:text-[24px] xl:text-[32px] font-bold tracking-[0.1em] text-primary">
                        Рекомендуємо
                    </h2>
                    <div className="w-28 h-0.25 bg-primary"></div>
                </div>

                <div className="cocktail-list">
                    {selectedCocktails.map((cocktail, index) => (
                        <Link key={cocktail.id} to={`/cocktails/${cocktail.id}`} className="block">
                        <div id={`cocktail-${index}`}>
                            <RecommentedCocktailCard
                            id={cocktail.id}
                            title={cocktail.title}
                            imageUrl={`/assets/images/home/RecommentedCoctail/${cocktail.id}.png`}
                            imageUrlFruit={`/assets/images/home/RecommentedCoctail/fruits/${cocktail.id}.png`}
                            ingredients={cocktail.ingredients}
                            method={cocktail.method}
                            subject={cocktail.subject}
                            />
                        </div>
                        </Link>
                    ))}
                </div>
           
            </div> 
            <div id="stop-block" className="w-full h-16 bg-primary"></div>
            <div className="bg-white z-10">
                <div className="mx-auto px-4 md:px-0 max-w-[1400px] flex flex-col items-start gap-6 md:gap-0 mb-8 md:flex-row md:bg-[url('/assets/images/home/about_us.png')] bg-no-repeat bg-cover">
                    <div className="flex flex-col gap-7 md:gap-10 xl:gap-14 md:bg-[rgba(0,0,0,0.8)] md:w-[50vw] max-w-[700px] md:pt-18 md:pr-5 md:pb-30 md:pl-12 xl:pt-50 xl:pr-12 xl:pb-54 xl:pl-25">
                        <div className="flex flex-col items-center gap-2">
                            <h2 className="font-display-georgia uppercase text-[16px] md:text-[20px] xl:text-[24px] font-bold tracking-[0.1em] text-primary md:text-white">
                                Про нас
                            </h2>
                            <div className="w-28 h-0.25 bg-primary md:bg-white"></div>
                        </div>
                        <p className="font-raleway text-[14px] md:text-[18px] xl:text-[20px] tracking-[0.1em] leading-[1.8] md:text-white">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                        </p>
                    </div>
                    <img className="md:w-[50vw] md:max-w-[700px] md:invisible" src="/assets/images/home/about_us.png" alt="" />
                </div>
                <div className="mx-auto px-4 md:px-0 max-w-[1400px] flex flex-col mt-8 mb-20">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-4">
                        <div className="flex flex-col gap-6 md:gap-8 xl:gap-10 md:ml-8 xl:ml-12">
                            <div className="flex flex-col items-center gap-2">
                                <h2 className="font-display-georgia uppercase text-[16px] md:text-[20px] xl:text-[24px] font-bold tracking-[0.1em] text-primary">
                                    Про автора
                                </h2>
                                <div className="w-28 h-0.25 bg-primary"></div>
                            </div>
                            <p className="font-raleway text-[14px] md:text-[18px] xl:text-[20px] tracking-[0.1em] leading-[1.8]">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                            </p>
                            <ul className="justify-center gap-8 hidden md:flex md:visible">
                                <li>
                                    <a href="http://google.com" target="_blank">
                                        <InstagramLogo className="w-[35px] lg:w-[50px] h-[35px] lg:h-[50px] text-black"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://google.com" target="_blank">
                                        <TiktokLogo className="w-[35px] lg:w-[50px] h-[35px] lg:h-[50px] text-black"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://google.com" target="_blank">
                                        <FacebookLogo className="w-[35px] lg:w-[50px] h-[35px] lg:h-[50px] text-black"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <CustomDashedBorderBase className="md:p-4 lg:p-8 h-fit md:w-[50vw] max-w-[700px]" withoutBorders={isMobile}>
                            <img src="/assets/images/home/about_author.png" alt="" />
                        </CustomDashedBorderBase>
                    </div>
                    <ul className="flex justify-center gap-8 md:hidden">
                        <li>
                            <a href="http://google.com" target="_blank">
                                <InstagramLogo className="w-[35px] lg:w-[50px] h-[35px] lg:h-[50px] text-black"/>
                            </a>
                        </li>
                        <li>
                            <a href="http://google.com" target="_blank">
                                <TiktokLogo className="w-[35px] lg:w-[50px] h-[35px] lg:h-[50px] text-black"/>
                            </a>
                        </li>
                        <li>
                            <a href="http://google.com" target="_blank">
                                <FacebookLogo className="w-[35px] lg:w-[50px] h-[35px] lg:h-[50px] text-black"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-7 md:gap-9 xl:gap-12">
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="font-display-georgia uppercase text-[16px] md:text-[24px] xl:text-[32px] font-bold tracking-[0.1em] text-primary">
                            Категорія коктейлів
                        </h2>
                        <div className="w-28 h-0.25 bg-primary"></div>
                    </div>
                    <div className="container grid grid-cols-2 gap-x-4 gap-y-7 sm:gap-x-6 sm:gap-y-10 md:flex flex-col">
                        {categoryFilter.filters.map(({ name, value }) => (
                            <Link
                                key={value}
                                to={`/cocktails?category=${value}`}
                                className="block"
                            >
                                <CategoryCocktailCard
                                    title={name}
                                    imageUrl={`../../public/assets/images/home/CategoryCoctail/${value}.png`}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-7 md:gap-9 xl:gap-12 py-8 md:py-16 xl:py-24">
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="font-display-georgia uppercase text-[16px] md:text-[24px] xl:text-[32px] font-bold tracking-[0.1em] text-primary">
                            Рекомендуємо
                        </h2>
                        <div className="w-28 h-0.25 bg-primary"></div>
                    </div>
                    <div className="container grid grid-cols-2 gap-x-4 gap-y-7 md:gap-x-6 md:gap-y-10 xl:grid-cols-3 xl:gap-y-13">
                        {visibleCocktails.map((cocktail)=> (
                            <Link
                                key={cocktail.id}
                                to={`/cocktails/${cocktail.id}`}
                                className="block"
                            >
                                <CocktailCard
                                title={cocktail.title}
                                imageUrl={cocktail.imageUrl}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};