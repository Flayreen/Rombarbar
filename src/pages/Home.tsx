import InstagramLogo from "../../public/assets/svgs/social/instagram-logo.svg";
import TiktokLogo from "../../public/assets/svgs/social/tiktok-logo.svg";
import FacebookLogo from "../../public/assets/svgs/social/facebook-logo.svg";


export const Home = () => {
    return (
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
    );
};