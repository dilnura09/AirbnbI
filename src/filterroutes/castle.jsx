





import { useContext } from "react"
import { FilterContext } from "../context/filter"
import { Link } from "react-router-dom"
import { Likescontext } from "../context/likescontext"
import Layout from "../components/Layout"

const Castle=()=>{
  
    const {proud} = useContext(FilterContext)
    const {addLikes} = useContext(Likescontext)

    return(

          <Layout>

        <div className="max-w-[1450px] mx-auto grid grid-cols-6 gap-5 mt-[50px]">
        

            {
                proud.map((item)=>{
                    if(item.catigory === "castle") {
                    return(
                        <div key={item.id} className=" relative">
                                 
                            <button onClick={()=>addLikes(item)}> <img src="./hearticon.svg" alt="" className=" h-7 absolute z-10 top-7 left-3 " /> </button> 
                            <Link to={`/product/${item.id}`} className=" relative">
                              <img src={item.img} alt=""  className=" h-[250px] w-[300px] rounded-md"/>
                              <h2 className=" font-medium">{item.title}</h2>
                              <h3>{item.name}</h3>
                              <span className=" font-medium">{item.text}</span>

                            </Link>
                           

                        </div>
                    )
                    }
                })
            }


        </div>
        </Layout>
    )
}

export default Castle