import Auth from "../pages/Auth/Auth"
import { Routes, Route } from "react-router-dom"
import Login from "../pages/Auth/Login"
import Register from "../pages/Auth/Register"



const PublicRoutes=()=>{
    return(
       <Routes>
        <Route path="/Auth" element={<Auth/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<Auth/> }/>
       </Routes>
    )
}

export default PublicRoutes