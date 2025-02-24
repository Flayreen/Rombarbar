import {BrowserRouter, Route, Routes} from "react-router-dom";
import {WebLinks} from "./routes.ts";
import {Home} from "../pages/Home.tsx";
import {Recipe} from "../pages/Recipe.tsx";
import Layout from "../layout/Layout.tsx";


const Provider = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={WebLinks.Home} element={<Layout/>}>
                    <Route path={WebLinks.Home} element={<Home/>} />
                    <Route path={WebLinks.Recipe} element={<Recipe/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Provider;