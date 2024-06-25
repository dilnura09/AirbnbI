import { useContext, useEffect, useState } from "react"; 
import "./App.css";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import { AuthContext } from "./context/authcontext";

function App() {
    const { isAuth } = useContext(AuthContext)
    
    return  isAuth ? <PrivateRoutes/> : <PublicRoutes/>

}

export default App;
