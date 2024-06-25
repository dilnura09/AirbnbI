import Product from "../components/product2";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
// import Product from "./"
// import Online from "./pages/online";
import Online from "../pages/online"
import Dynamicpage from "../pages/dyinamic";
import Likespage from "../pages/Likes";
import Homehost from "../pages/homehostpage";
import FilterRoutes from "../filterroutes/FilterRoutes";
// import Filter from "..//components/filter2";
import Arctika from "../filterroutes/arctika";
import Tropiki from "../filterroutes/tropik";
import Dizayn from "../filterroutes/dizayn";
import Famous from "../filterroutes/famous";
import Luxe from "../filterroutes/luxe";
import Ozera from "../filterroutes/ozera";
import Castle from "../filterroutes/castle";
import Beach from "../filterroutes/beach";
import Superbas from "../filterroutes/superbas";
import Pagenot from "../pages/pagenot";

const PrivateRoutes = () => {
    return (

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Home />} />
                <Route path="/login" element={<Home />} />
                <Route path="/online" element={<Online />} />
                <Route path="/product/:id" element={<Dynamicpage />} />
                <Route path="/wishlist" element={<Likespage />} />
                <Route path="/host/home" element={<Homehost />} />
                <Route path="/super" element={<FilterRoutes />} />
                <Route path="/arctica" element={<Arctika />} />
                <Route path="/dizayn" element={<Dizayn />} />
                <Route path="/tropiki" element={<Tropiki />} />
                <Route path="/famous" element={<Famous />} />
                <Route path="/luxe" element={<Luxe />} />
                <Route path="/ozera" element={<Ozera />} />
                <Route path="/castle" element={<Castle />} />
                <Route path="/beach" element={<Beach />} />
                <Route path="/superbs" element={<Superbas />} />
                <Route path="*" element={<Pagenot />} />
            </Routes>
    );
}

export default PrivateRoutes;
