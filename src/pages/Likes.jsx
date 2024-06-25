import { useContext } from "react"
import { Likescontext } from "../context/likescontext"
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Likespage=()=>{
    const {likesdata,removelike} = useContext(Likescontext)
    console.log(likesdata);
    return(
        <Layout>
            {likesdata.length === 0 ?(
                    <div className=" mt-[300px] max-w-[1450px] mx-auto flex flex-col justify-center items-center gap-4">
                        <div className=" bg-red-50 w-[100px] rounded-xl flex items-center justify-center p-3">
                        <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-256.png" alt="" className=" h-[80px]" />
                        </div>
                        <p className=" text-[22px] font-semibold">У вас нет избранных товаров</p>
                        <p>Добавляйте товары в Избранное с помощью ❤️️</p>
                       <Link to={'/'}>
                       <button className="p-[14px] flex items-center justify-center  cursor-pointer transition-all ease-in-out duration-100 text-light bg-red-500 stroke-light hover:bg-hover-red min-w-[280px] rounded-[12px] text-[14px] font-[600] text-white">Назад</button>
                       </Link> 
                        
                    </div>

                ):(
                    <div className=" grid grid-cols-4 gap-10 max-w-[1450px] mx-auto mt-[300px]">
                    {
                        likesdata.map((v)=>{
                            return(
                                <div key={v.id} className=" relative">
                                    <button onClick={()=>removelike((v.id))}><img src="https://cdn3.iconfinder.com/data/icons/minimal/64x64/actions/gtk-close.png" alt="" className=" h-7 absolute z-10 top-7 left-3 focus:bg-red-500" /></button>
                                <Link to={`/product/${v.id}`} className=" relative">
                                  <img src={v.img} alt=""  className=" h-[250px] w-[300px] rounded-md"/>
                                  <h2 className=" font-medium">{v.title}</h2>
                                  <h3>{v.name}</h3>
                                  <span className=" font-medium">{v.text}</span>
                                </Link>
                            </div>
                            )
                        })
                    }
                </div>
                )
              
            }
           

        </Layout>
    )
}

export default Likespage