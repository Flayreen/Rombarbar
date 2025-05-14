import {Outlet} from "react-router-dom";
import Header from "./header/Header.tsx";
import Footer from "@/layout/Footer.tsx";

const Layout = () => {
    return (
        <div className="min-h-screen relative">
            <Header/>
            <div className="min-h-screen pt-[51px] md:pt-[68px] lg:pt-[94px] pb-[105px] md:pb-[141px] lg:pb-[196px]">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;