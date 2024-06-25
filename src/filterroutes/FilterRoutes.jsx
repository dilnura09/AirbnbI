import { Link } from "react-router-dom"

const FilterRoutes=()=>{
    return(
        <div className="max-w-[1650px] mx-auto">
            <div className=" flex items-center justify-around z-50 mt-[300px]">
                <Link to={"/super"} className=" flex flex-col  items-center ">
                   <img src="https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png" alt="" className=" h-6 w-6" />
                     <span className="">Суперзвезды</span>
                </Link>

                <Link to={"/arctica"} className=" flex flex-col  items-center ">
                   <img src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg" alt="" className=" h-6 w-6" />
                     <span className="">Арктика</span>
                </Link>

                <Link to={"/dizayn"} className=" flex flex-col  items-center ">
                   <img src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg" alt="" className=" h-6 w-6" />
                     <span className="">Дизайн</span>
                </Link>

                <Link to={"/tropiki"} className=" flex flex-col  items-center ">
                   <img src="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg" alt="" className=" h-6 w-6" />
                     <span className="">Тропики</span>
                </Link>

                <Link to={"/famous"} className=" flex flex-col  items-center ">
                   <img src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg" alt="" className=" h-6 w-6" />
                     <span className="">Популярные</span>
                </Link>

                <Link to={"/luxe"} className=" flex flex-col  items-center ">
                   <img src="https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg" alt="" className=" h-6 w-6" />
                     <span className="">Luxe</span>
                </Link>

                <Link to={"/ozera"} className=" flex flex-col  items-center ">
                   <img src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" alt="" className=" h-6 w-6" />
                     <span className="">У озера</span>
                </Link>

                <Link to={"/castle"} className=" flex flex-col  items-center ">
                   <img src="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg" alt="" className=" h-6 w-6" />
                     <span className="">Замки</span>
                </Link>

                <Link to={"/beach"} className=" flex flex-col  items-center ">
                   <img src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg" alt="" className=" h-6 w-6" />
                     <span className="">Рядом пляж</span>
                </Link>

                <Link to={"/beach"} className=" flex flex-col  items-center ">
                   <img src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" alt="" className=" h-6 w-6" />
                     <span className="">Супербассейны</span>
                </Link>







            </div>
        </div>
    )
}
export default FilterRoutes