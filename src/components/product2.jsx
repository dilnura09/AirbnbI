import { useContext } from "react"
import { FilterContext } from "../context/filter"
import { Link } from "react-router-dom"

const Product=()=>{

    const {product} = useContext(FilterContext)
    return(
        <div className="max-w-[1450px] mx-auto mt-[100px]">
             <h1 className=" text-6xl font-medium mb-[100px]">Прошлые выпуски</h1>
        
        <div className="grid grid-cols-4 gap-6 ">
          

            {
                product.map((v)=>{
                    return(
                        <div key={v.id}>
                            <Link to={`/product/${v.id}`}>
                             <img src={v.img} alt="" className="rounded-xl object-cover " />
                             <h2  className=" font-medium ">{v.title}</h2>
                             <span>{v.name}</span>
                             <h1 className=" font-medium">{v.text}</h1>

                            </Link>
                            

                        </div>
                    )
                })
            }

        </div>
        </div>
    )
}

export default Product