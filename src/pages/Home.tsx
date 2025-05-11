import InstagramLogo from "../../public/assets/svgs/social/instagram-logo.svg";
import TiktokLogo from "../../public/assets/svgs/social/tiktok-logo.svg";
import FacebookLogo from "../../public/assets/svgs/social/facebook-logo.svg";
import { cocktailsFilters } from "@/modules/cocktails-list/constants";
import { Link } from "react-router-dom";
import { CategoryCocktailCard } from "@/components/cards/CategoryCoctailCard";
import { CocktailCard } from "@/components/cards/CocktailCard";
import { useEffect, useState } from "react";
import cocktailsList from "@/database/cocktails.json";

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
    if (!categoryFilter) return null;

    const width = useWindowWidth();

    let count = 3;
    if (width < 768) count = 2;       // мобілка
    else if (width < 1280) count = 2;  // планшет
    else if (width < 1920) count = 3; // ноут
  
    const firstFourCocktails = cocktailsList.slice(0, 3);
    const visibleCocktails = firstFourCocktails.slice(0, count);
    
    return (
        <div>
            <div className="absolute h-[100vh] w-full top-0">
                <img
                    src="/assets/images/home/hero.png"
                    loading="eager"
                    alt="Hero"
                    className="h-full w-full object-[30%_center] object-cover"
                />
                <img
                    src="/assets/images/logo.png"
                    alt="Logo"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw]"
                />
            </div>

            <div className="mt-[100vh]">
                <div className="flex flex-col items-center gap-2">
                    <h2 className="font-display-georgia uppercase text-[16px] md:text-[24px] xl:text-[32px] font-bold tracking-[0.1em] text-primary">
                        Рекомендуємо
                    </h2>
                    <div className="w-28 h-0.25 bg-primary"></div>
                </div>
                <div className="my-8 container bg-primary py-5">
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="font-display-georgia uppercase text-[16px] md:text-[24px] xl:text-[32px] font-bold tracking-[0.1em] text-white">
                            Bloody Mary
                        </h2>
                        <div className="w-28 h-0.25 bg-white"></div>
                    </div>
                    <img src="../../public/assets/images/home/about_us.png" alt="" />
                    <div className="flex flex-col items-center gap-7">
                        <h3 className="font-display-georgia uppercase text-[16px] md:text-[24px] tracking-[0.18em] text-white">Інгредієнти:</h3>
                        <p className="font-raleway text-[12px] md:text-[20px] xl:text-[24px] tracking-[0.1em] leading-[1.8] text-white">fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</p>
                    </div>
                    <div className="flex flex-col items-center gap-7">
                        <h3 className="font-display-georgia uppercase text-[16px] md:text-[24px] tracking-[0.18em] text-white">Метод приготування:</h3>
                        <p className="font-raleway text-[12px] md:text-[20px] xl:text-[24px] tracking-[0.1em] leading-[1.8] text-white">fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</p>
                    </div>
                    <div className="flex flex-col items-center gap-7">
                        <h3 className="font-display-georgia uppercase text-[16px] md:text-[24px] tracking-[0.18em] text-white">Подача:</h3>
                        <p className="font-raleway text-[12px] md:text-[20px] xl:text-[24px] tracking-[0.1em] leading-[1.8] text-white">fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</p>
                    </div>
                </div>
            </div> 
            <div className="container">
                <div className="flex flex-col items-start gap-6 mb-8">
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="font-display-georgia uppercase text-[16px] md:text-[24px] xl:text-[32px] font-bold tracking-[0.1em] text-primary">
                            Про нас
                        </h2>
                        <div className="w-28 h-0.25 bg-primary"></div>
                    </div>
                    <p className="font-raleway text-[14px] md:text-[20px] xl:text-[24px] tracking-[0.1em] leading-[1.8]">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                    </p>
                    <img src="/assets/images/home/about_us.png" alt="" />
                </div>
                <div className="flex flex-col items-start gap-6 mb-4">
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="font-display-georgia uppercase text-[16px] md:text-[24px] xl:text-[32px] font-bold tracking-[0.1em] text-primary">
                            Про автора
                        </h2>
                        <div className="w-28 h-0.25 bg-primary"></div>
                    </div>
                    <p className="font-raleway text-[14px] md:text-[20px] xl:text-[24px] tracking-[0.1em] leading-[1.8]">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                    </p>
                    <img src="/assets/images/home/about_author.png" alt="" />
                </div>
                <ul className="flex justify-center gap-8">
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
            <div className="flex flex-col gap-7 md:gap-9 xl:gap-12 my-8 md:my-16 xl:my-24">
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
    );
};