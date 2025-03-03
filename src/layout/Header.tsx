import {Link} from "react-router-dom";
import Sidebar from "@/layout/Sidebar.tsx";
import {WebLinks} from "@/routes/routes.ts";

const Header = () => {
    return (
        <header className="bg-primary py-2 md:py-3 lg:py-5 fixed top-0 w-full">
            <div className="container flex justify-between items-center">
                <Link to={WebLinks.Home}>
                    <div className="h-[31px] md:h-[44px] lg:h-[54px]">
                        <img src="/assets/images/logo.png" alt="logo" className="h-full"/>
                    </div>
                </Link>

                <div>
                    <nav className="hidden lg:block">
                        <ul className="flex gap-6">
                            <li className="text-white text-base p-2.5 border border-transparent hover:border-b-1 hover:border-b-white">
                                <Link to={WebLinks.Alcohols}>ПРО АЛКОГОЛЬ</Link>
                            </li>
                            <li className="text-white text-base p-2.5 border border-transparent hover:border-b-1 hover:border-b-white">
                                <Link to={WebLinks.Brands}>ІСТОРІЯ БРЕНДІВ</Link>
                            </li>
                            <li className="text-white text-base p-2.5 border border-transparent hover:border-b-1 hover:border-b-white animate-in">
                                <Link to={WebLinks.Cocktails}>КАТЕГОРІЯ КОКТЕЙЛІВ</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="lg:hidden">
                        <Sidebar/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;