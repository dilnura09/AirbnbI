import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthProvider=({children})=>{
    const token = JSON.parse(localStorage.getItem("token"));
    const [isAuth,setisAuth] =
    useState(token ? true:false);
    const info = JSON.parse(localStorage.getItem("user-info"));
    return(
        <AuthContext.Provider value={{isAuth,setisAuth,info}}>
           {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider