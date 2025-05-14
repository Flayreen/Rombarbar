import { Link, useLocation } from "react-router-dom";
import Sidebar from "@/layout/Sidebar.tsx";
import { WebLinks } from "@/routes/routes.ts";
import useScrolledPast from "@/hooks/useScrolledPast";
import SearchHeader from "@/layout/header/SearchHeader.tsx";


const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const scrolled = isHome ? useScrolledPast(window.innerHeight - 50) : true;

    return (
        <header
            className={`fixed top-0 w-full z-100 transition-all duration-300 ${
                scrolled ? "bg-primary" : "bg-transparent"
            } py-2 md:py-3 lg:py-5`}
        >
            <div className={`container flex justify-between items-center  ${
                scrolled ? "md:justify-between" : "md:justify-center"
            }`}>
                <div className="h-8 w-8 md:hidden">
                    <SearchHeader />
                </div>

                {scrolled && (
                    <Link to={WebLinks.Home}>
                        <div className="h-[31px] md:h-[44px] lg:h-[54px]">
                            <img
                                src="/assets/images/logo.png"
                                alt="logo"
                                className="h-full"
                            />
                        </div>
                    </Link>
                )}

                <div>
                    <nav className="hidden md:block">
                        <ul className="flex gap-6">
                            <li className="font-display-georgia font-bold text-white text-base xl:text-[16px] p-2.5 border border-transparent hover:border-b-1 hover:border-b-white">
                                <Link to={WebLinks.Alcohols}>ПРО АЛКОГОЛЬ</Link>
                            </li>
                            <li className="font-display-georgia font-bold text-white text-base xl:text-[16px] p-2.5 border border-transparent hover:border-b-1 hover:border-b-white">
                                <Link to={WebLinks.Brands}>ІСТОРІЯ БРЕНДІВ</Link>
                            </li>
                            <li className="font-display-georgia font-bold text-white text-base xl:text-[16px] p-2.5 border border-transparent hover:border-b-1 hover:border-b-white animate-in">
                                <Link to={WebLinks.Cocktails}>КАТЕГОРІЯ КОКТЕЙЛІВ</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="md:hidden">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
