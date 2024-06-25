import { useContext } from "react"
import { FilterContext } from "../context/filter"
import { Link } from "react-router-dom"
import { Likescontext } from "../context/likescontext"
// import Routes from "../filterroutes/FilterRoutes"

const Filtersection=()=>{
  
    const {proud} = useContext(FilterContext)
    const {addLikes} = useContext(Likescontext)


    return(

          <div className="max-w-[1450px] mx-auto ">
         
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-[10px]">
        

            {
                proud.map((item)=>{
                    return(
                        <div key={item.id} className=" relative">
                                 
                            <button onClick={()=>addLikes(item)}> <img src="./hearticon.svg" alt="" className=" h-7 absolute z-10 top-7 left-3 " /> </button> 
                            <Link to={`/product/${item.id}`} className=" relative">
                              <img src={item.img} alt=""  className=" h-[250px] w-[300px] rounded-md saturate-100 md:h-[300px] md:w-[350px]"/>
                              <h2 className=" font-medium">{item.title}</h2>
                              <h3>{item.name}</h3>
                              <span className=" font-medium">{item.text}</span>

                            </Link>
                           

                        </div>
                    )
                })
            }


        </div>
        </div>
    )
}

export default Filtersection