import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Layout from "../components/Layout"

const Dynamicpage=()=>{

    const params = useParams()
    const [product,setproduct] = useState({})
    console.log(params.id);


    const getData =async ()=>{
        try {
        const response = await axios.get(`https://3641693fd61b653b.mokky.dev/card1/${params.id}`)
        setproduct(response.data)
        console.log(response.data);
            
        } catch (error) {
             console.log(error);
        }
    }

    useEffect(()=>{
        getData()
    },[params.id])
    return(

        <Layout >
            <div className="mt-[200px] relative max-w-[1450px] mx-auto">
            <h1 className=" text-4xl">{product.title2}"</h1>
            <div className=" flex mt-7 gap-4 ">
                <img src={product.img} alt="" className=" w-[700px]  rounded-l-lg" />
                <div>
                    <img src={product.img2} alt=""  className=" w-[300px] h-[250px] mb-[20px]"/>
                    <img src={product.img4} alt="" className=" w-[300px] h-[250px] " />
                </div>
                <div>
                    <img src={product.img3} alt=""  className=" w-[300px] h-[250px] rounded-r-lg mb-[20px]"/>
                    <img src={product.img5} alt="" className=" w-[300px] h-[250px] rounded-r-lg" />
                </div>
            </div>

            <div className="flex gap-[200px]  relative">
            <div className=" sticky">

              <div>
                <h2 className=" text-3xl">{product.county}</h2>
                <span className=" text-xl text-gray-500">8 гостей  3 спальни  3 кровати  3 ванные</span>
             </div>
                 <div className=" border-2 p-5 rounded-xl flex items-center gap-3 mt-[50px] w-[550px]">
                    <div className=" flex items-center">
                        <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/78b7687c-5acf-4ef8-a5ea-eda732ae3b2f.png" alt="" className=" h-[50px]" />
                        <span className=" font-medium">Выбор <br />гостей</span>
                        <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/b4005b30-79ff-4287-860c-67829ecd7412.png" alt="" className=" h-[50px]" />
                    </div>
                    
                    <h3 className=" text-lg font-medium">Это жилье — одно из самых <br /> любимых  у гостей на Airbnb</h3>
                    <div>
                        <span className=" text-4xl mx-3">5.0</span>
                        
                    </div>
                    <div className=" h-[60px] border-r-2"></div>

                 </div>

                 <div className=" w-[700px] border-[1px] mt-[40px]"></div>
                    <div className=" mt-[40px] flex items-center gap-2">
                      <img src="https://a0.muscache.com/im/pictures/user/User-571407812/original/d3298ae6-1ea8-494c-a001-d00e59ed0935.jpeg?im_w=240" alt="" className=" h-[50px] rounded-full" />
                      <div className=" flex flex-col">
                      <span className=" font-medium">Хозяин: Joy</span>
                      <span>Эмоция</span>
                    </div>
                 </div>

                 <div className=" w-[700px] border-[1px] mt-[40px]"></div>

                 <div className=" flex flex-col gap-6">
                    <div className=" flex items-center gap-5 mt-[50px]">
                        <img src="https://cdn4.iconfinder.com/data/icons/furniture-2033/32/bed-256.png" alt="bed" className=" h-[40px]"  />
                        <div>
                            <h3 className=" font-medium text-black">Остановитесь в моем доме — том самом, с воздушными шарами</h3>
                            <p>Над моим домом парит больше 8000 воздушных шаров. О да!</p>
                        </div>
                    </div>

                    <div className=" flex items-center gap-5">
                        <img src="https://cdn4.iconfinder.com/data/icons/basic-ui-2-line/32/pin-location-mark-needle-pricker-256.png" alt="" className=" h-[30px]" />
                        <div>
                          <h3 className=" font-medium text-black">Вперед, на поиски приключений!</h3>
                          <p>Исследуйте мир, получайте значки. Я уже слишком стар для этого.</p>

                        </div>
                    </div>

                    <div className=" flex items-center gap-5">
                        <img src="https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/heart-256.png" alt="" className=" h-[30px]" />
                        <div>
                          <h3 className=" font-medium text-black">Познакомьтесь с моей дорогой Элли</h3>
                          <p>Здесь ее очки, книга приключений и любовные письма: смотрите, листайте..</p>

                        </div>
                    </div>

                    <div className=" flex items-center gap-5">
                        <img src="https://cdn2.iconfinder.com/data/icons/multimedia-26/24/multimedia-19-256.png" alt="" className=" h-[30px]" />
                        <div>
                          <h3 className=" font-medium text-black">Battle Royale со мной</h3>
                          <p>Поучаствуйте в турнире Fortnite вместе со мной и проверьте, на что вы способны.</p>

                        </div>
                    </div>


                 </div>

                 <div>
                    
                 </div>
             </div>

             <div className="   sticky z-40 top-0 border-2 p-[30px] rounded-xl shadow-xl">
                <div>
                    <span className=" font-medium mr-2 text-[20px]">$373</span>
                    <span>ночь</span>
                </div>
                <div className=" border-2 rounded-md mt-6">
                    <div className=" flex gap-5 border-b-2">
                       <div className=" border-r-2 px-10 py-4 ">
                       <h4 className=" font-medium">Прибытие</h4>
                        <span>03.08.2024</span>
                       </div>
                       <div className=" px-10 py-4 ">
                        <h4  className=" font-medium">Выезд</h4>
                        <span >08.08.2024</span>
                       </div>
                    </div>
                    
                    <h3 className="ml-9 font-medium">Для кого</h3>
                    <span className="ml-9">1 гость</span>
                </div>

                <button className=" text-white bg-gradient-to-r from-red-500 to-pink-600 w-full h-[40px] rounded-md mt-6 ">Забронировать</button>
                <p className=" text-center mt-3 font-light">Пока вы ни за что не платите</p>
                <div className=" flex items-center justify-between mt-7">
                    <div>
                        <h4 >$373 x 5 ночей</h4>
                        <h4 >Плата за уборку</h4>
                        <h4 >Сервисный сбор Airbnb</h4>
                    </div>
                    <div>
                        <h4>$1 865</h4>
                        <span>$93</span>
                        <span>$2 343</span>
                    </div>
                </div>
                <div className=" w-full border-b-2 my-5"></div>
                <div className=" flex items-center gap-20">
                    <h4 className=" font-semibold">Всего (без учета налогов)</h4>
                    <span className=" font-semibold">$2 343</span>
                </div>


             </div>

     </div>
     </div>
     </Layout>
    )
}

export default Dynamicpage