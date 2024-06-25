import { useContext, useState } from "react"
import { AuthContext } from "../../context/authcontext"
import axios from "axios"

const Login=()=>{

    const {setisAuth} = useContext(AuthContext)
    const [email,setemail] = useState("")
    const [password,setPassword] = useState("")

    const PostData =async (data)=>{
        try {
            const response = await axios.post(
                "https://3641693fd61b653b.mokky.dev/auth",data
            )

            if(response.status === 201);
            setisAuth(true)
            localStorage.setItem('token',response.data.token);
            localStorage.setItem("user-info",JSON.stringify(response.data.data))
            
        } catch (error) {
            console.log(error);
        }
    }

    const handleData =async (e)=>{
        e.preventDefault()
        const data ={
            email,
            password,
        };
        await PostData(data)
    }
    return(
        <div className=" flex flex-col items-center justify-center h-screen">
            <h1>login</h1>
            <form action="" className=" shadow-xl p-4" onSubmit={handleData}>
                <input type="text"
                className="border-2 p-2 rounded-lg"
                placeholder="email" 
                name="email"
                value={email}
                onChange={(e)=>setemail(e.target.value)}/>

                <input type="text"
                className="border-2 p-2 rounded-md"
                placeholder="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />

                <button className="" >kirish</button>
            
            </form>
            
        </div>
    )
}

export default Login