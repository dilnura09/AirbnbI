import axios from "axios"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authcontext"

const Register=()=>{
    const {setisAuth} = useContext(AuthContext)

    const Postdata = async (data)=>{
        try {
            const response = await axios.post('https://9303851354d5e8f0.mokky.dev/register',
               data
            )
            console.log(response.data);
            if(response.status === 201){
                localStorage.setItem("user-info",JSON.stringify(response.data.data))
                localStorage.setItem("token",JSON.stringify(response.data.token))
                setisAuth(true)
            }
            
            
        } catch (error) {
            console.log(error);
        }
    }

    const handledata=(e)=>{


      e.preventDefault()
      let fullname = e.target.fullname.value
      let email = e.target.email.value
      let password =e.target.password.value
      const data ={
        fullname,
        email,
        password
      }
      Postdata(data)
      console.log(fullname);
    }
    return(
        <div>
            <div className="  flex flex-col items-center justify-center h-screen">
                <h2 className=" text-4xl font-semibold mb-4 text-purple-800">зарегистрируйтесь</h2>
                
                <form onSubmit={handledata} className=" flex flex-col gap-4 border-2 rounded-xl p-5 shadow-xl">
                    <input className=" border-[1px] p-1 rounded-md" type="email" placeholder="email" name="email" />
                    <input className=" border-[1px] p-1 rounded-md" type="text" placeholder="fullname" name="fullname" />
                    <input className=" border-[1px] p-1 rounded-md" type="password" placeholder="password" name="password" />
                    <button className=" p-2 bg-purple-800 text-white rounded-xl"> register</button>
                </form>
                {/* <a href="/login">Sign in</a> */}
                <Link to={'/login'}>Sign in</Link>
            </div>
          
        </div>
    )
}

export default Register