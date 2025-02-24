import {DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger, Drawer} from "@/components/ui/drawer.tsx";
import BurgerIcon from "../../public/assets/svgs/burger-menu.svg";
import {MoveLeft, X} from "lucide-react";
import {Link} from "react-router-dom";
import StarDivider from "@/components/StarDivider.tsx";
import {WebLinks} from "@/routes/routes.ts";

const Sidebar = () => {
    return (
        <Drawer direction="right">
            <DrawerTrigger asChild className="w-[35px] h-[35px]">
                <BurgerIcon />
            </DrawerTrigger>
            <DrawerContent className="bg-primary pt-4">
                <DrawerHeader>
                    <DrawerClose className="flex justify-end">
                        <X strokeWidth={1} width={35} height={35} color="white" />
                    </DrawerClose>
                </DrawerHeader>

                <nav className="pt-20">
                    <ul className="flex flex-col gap-10 px-4">
                        <li className="text-white text-base md:text-xl py-1 border-b-1">
                            <Link to={WebLinks.Home}>
                                <DrawerClose className="w-full flex justify-between">
                                    <MoveLeft strokeWidth={1} width={32} height={32} color="white" />
                                    <span>ПРО АЛКОГОЛЬ</span>
                                </DrawerClose>
                            </Link>
                        </li>
                        <li className="text-white text-base md:text-xl py-1 border-b-1">
                            <Link to={WebLinks.Home} className="flex justify-between">
                                <DrawerClose className="w-full flex justify-between">
                                    <MoveLeft strokeWidth={1} width={32} height={32} color="white" />
                                    <span>ІСТОРІЯ БРЕНДІВ</span>
                                </DrawerClose>
                            </Link>
                        </li>
                        <li className="text-white text-base md:text-xl py-1 border-b-1">
                            <Link to={WebLinks.Home} className="flex justify-between">
                                <DrawerClose className="w-full flex justify-between">
                                    <MoveLeft strokeWidth={1} width={32} height={32} color="white" />
                                    <span>КАТЕГОРІЯ КОКТЕЙЛІВ</span>
                                </DrawerClose>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <DrawerFooter>
                    <div className="flex flex-col gap-20 items-center">
                        <StarDivider />

                        <Link to={WebLinks.Home}>
                            <DrawerClose>
                                <div className="h-[32px]">
                                    <img src="/assets/images/logo.png" alt="logo" className="h-full"/>
                                </div>
                            </DrawerClose>
                        </Link>
                    </div>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default Sidebar;