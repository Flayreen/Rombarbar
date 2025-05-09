import InstagramLogo from "../../public/assets/svgs/social/instagram-logo.svg";
import TiktokLogo from "../../public/assets/svgs/social/tiktok-logo.svg";
import FacebookLogo from "../../public/assets/svgs/social/facebook-logo.svg";
import { cocktailsFilters } from "@/modules/cocktails-list/constants";
import { Link } from "react-router-dom";
import {CocktailCard} from "@/components/cards/CocktailCard.tsx";

const categoryFilter = cocktailsFilters.find(
    (filter) => filter.filterLabel === "category"
);

export const Home = () => {
    if (!categoryFilter) return null;

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

            <div>
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
            <div className="container grid grid-cols-2 gap-x-4 gap-y-7 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-y-13">
            {categoryFilter.filters.map(({ name, value }) => (
                <Link
                    key={value}
                    to={`/cocktails?category=${value}`}
                    className="block"
                >
                    <CocktailCard
                        title={name}
                        imageUrl={`../../public/assets/images/home/about_author.png`}
                    />
                </Link>
            ))}
            </div>
        </div>
    );
};