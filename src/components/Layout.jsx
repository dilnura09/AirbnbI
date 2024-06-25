import React from "react";
import Header from "../header";
import FilterRoutes from "../filterroutes/FilterRoutes";
import Footer from "../footer";

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <FilterRoutes/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;
