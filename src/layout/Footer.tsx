import InstagramLogo from "../../public/assets/svgs/social/instagram-logo.svg";
import TiktokLogo from "../../public/assets/svgs/social/tiktok-logo.svg";
import FacebookLogo from "../../public/assets/svgs/social/facebook-logo.svg";
import {Link} from "react-router-dom";
import {WebLinks} from "@/routes/routes.ts";

const Footer = () => {
    return (
        <footer className="bg-primary py-4 md:py-7 lg:py-12 absolute bottom-0 w-full">
            <div className="container flex justify-between items-center">
                <Link to={WebLinks.Home}>
                    <div className="h-[26px] md:h-[61px] lg:h-[83px]">
                        <img src="/assets/images/logo.png" alt="logo" className="h-full"/>
                    </div>
                </Link>

                <div className="flex flex-col gap-5 items-center">
                    <span className="font-raleway tracking-[1px] text-[12px] sm:text-[16px] md:text-[20px] font-light text-white">
                        Follow me on
                    </span>

                    <ul className="flex gap-8">
                        <li>
                            <a href="http://google.com" target="_blank">
                                <InstagramLogo className="w-[35px] lg:w-[50px] h-[35px] lg:h-[50px] text-white"/>
                            </a>
                        </li>
                        <li>
                            <a href="http://google.com" target="_blank">
                                <TiktokLogo className="w-[35px] lg:w-[50px] h-[35px] lg:h-[50px] text-white"/>
                            </a>
                        </li>
                        <li>
                            <a href="http://google.com" target="_blank">
                                <FacebookLogo className="w-[35px] lg:w-[50px] h-[35px] lg:h-[50px] text-white"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;