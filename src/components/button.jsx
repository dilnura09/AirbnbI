import { useState } from "react"
import { NavLink,Link } from "react-router-dom"

const Button =()=>{

    const [click,setClick] =useState(false)

    const onHandle=(e)=>{
        setClick(true)
        e.preventDefault()
         
    }

    const onClose=(e)=>{
        setClick(false)
        e.preventDefault()
    }
    return(
        <div className=" z-40">
            { click && ( <div className=" bg-white p-4 rounded-xl absolute right-[100px] top-[150px] shadow-xl " >
                <button onClick={onClose} ><img src="https://t4.ftcdn.net/jpg/00/75/69/13/360_F_75691329_CLLuXHPb6zqvgBnFkQjVnufsLEtmbL3e.jpg" alt="" className=" h-[20px]" /> </button>
               <div>
               <Link>Зарегистравация</Link>
                <h2>войти </h2>
                <Link to={"/wishlisti"}>вишлисты </Link>
                <div className=" h-[1px] bg-gray-300 my-2"></div>
                <Link to={"/host/home"}>Cдать жилье на Айрбнб </Link>
                <h2>Сентр помощи</h2>
               </div>
            </div>
            ) }
             

             <div className=" w-[80px] border-2 h-[50px]  gap-3  rounded-full p-3 hover:shadow-xl hover:shadow-gray-300 hidden lg:flex xl:flex 2xl:flex  ">
                <button  onClick={onHandle} className="flex flex-col gap-1 ">
                   <img src="https://icon2.cleanpng.com/20180704/wag/kisspng-crpe-italian-cuisine-colombini-italian-cafe-bist-hamburger-menu-5b3cf9eec50c36.8969936515307227988071.jpg" alt="" />
                </button>
                <img src="05.jpg" alt="" className="h-[20px]" />

            </div>

        </div>
    )
}
export default Button