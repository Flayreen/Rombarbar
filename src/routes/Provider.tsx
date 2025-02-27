import {BrowserRouter, Route, Routes} from "react-router-dom";
import {WebLinks} from "./routes.ts";
import {Home} from "../pages/Home.tsx";
import {CocktailRecipe} from "../pages/CocktailRecipe.tsx";
import Layout from "../layout/Layout.tsx";
import {CocktailsList} from "@/pages/CocktailsList.tsx";
import {BrandsList} from "@/pages/BrandsList.tsx";
import {BrandHistory} from "@/pages/BrandHistory.tsx";
import {AlcoholsList} from "@/pages/AlcoholsList.tsx";
import {AlcoholHistory} from "@/pages/AlcoholHistory.tsx";
import {NotFound} from "@/pages/NotFound.tsx";


const Provider = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={WebLinks.Home} element={<Layout/>}>
                    <Route path={WebLinks.Home} element={<Home/>} />
                    <Route path={WebLinks.Cocktails} element={<CocktailsList/>} />
                    <Route path={WebLinks.CocktailRecipe} element={<CocktailRecipe/>} />
                    <Route path={WebLinks.Brands} element={<BrandsList/>} />
                    <Route path={WebLinks.BrandHistory} element={<BrandHistory/>} />
                    <Route path={WebLinks.Alcohols} element={<AlcoholsList/>} />
                    <Route path={WebLinks.AlcoholHistory} element={<AlcoholHistory/>} />
                    <Route path="*" element={<NotFound/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Provider;