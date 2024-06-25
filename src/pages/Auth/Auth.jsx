import { Link } from "react-router-dom"


const Auth=()=>{
    return(
        <div className=" flex flex-col items-center justify-center h-screen ">
            <h2 className=" text-4xl font-semibold mb-6">Добро пожаловать в Airbnb</h2>
            <div className=" ">
              <Link className=" p-3 text-white bg-black rounded-md mx-3 " to={"/login"}>Sign in</Link>
              <Link className=" p-2 rounded-md border-2 border-black " to={"/register"}>Sign up</Link>
             </div>

        </div>
    )
}

export default Auth