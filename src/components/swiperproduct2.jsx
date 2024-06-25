import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Productcontext } from '../context/productswap';



import { FreeMode, Pagination } from 'swiper/modules';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
const Swproduct2=()=>{

    const {swproduct2} = useContext(Productcontext)
    return(
        <div className='mt-[30px]'>
             <Swiper
        slidesPerView={3}
        spaceBetween={60}
       
        loop={true}
       
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
             swproduct2.map((v)=>{
                return(
                    <Link>
                    <SwiperSlide key={v.id} className=' ' >
                       <div className=' flex justify-center items-center gap-8 h-[250px] w-[400px] border-2 rounded-2xl '>
                        <img src={v.img} alt="" className=' h-[230px] rounded-xl' />
                        <div>
                            <div className=' flex items-center gap-2 '>
                                <img src="star.png" alt="" className=' w-7 h-7' />
                                <h2>4,96</h2>
                                <span className=' font-light'> {v.country}</span>
                            </div>
                            <p>{v.description}</p>
                        </div>
                       </div>
                         
                    </SwiperSlide>
                    </Link>
                    
                )
                   
                    
                
             })
        }
        
      </Swiper>


        </div>
    )
}

export default Swproduct2