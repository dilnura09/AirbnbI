import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Productcontext } from '../context/productswap';



import { FreeMode, Pagination,Autoplay } from 'swiper/modules';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
const Swproduct=()=>{

    const {swproduct} = useContext(Productcontext)
    return(
        <div className='mt-[30px]'>
             <Swiper
        slidesPerView={4}
        spaceBetween={60} 
        autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
        loop={true}
       
        modules={[FreeMode, Pagination,Autoplay]}
        className="mySwiper"
      >
        {
             swproduct.map((v)=>{
                return(
                  <SwiperSlide key={v.id}  >
                    <Link key={v.id} to={`/product/${v.id}`} >
                       
                         <img src={v.img} alt="" className=' rounded-lg  transition-all h-[350px]' />
                        
                       
                        <div className=' flex gap-2 items-center'>
                          <img  src="star.png" alt=""  className=' w-7 h-7'/>
                          <h1 className=' font-medium text-[18px]'>5,0</h1>
                          <span className=' text-[16px] text-gray-500'>(4) Япония</span>
                        </div>
                        <p className=' w-[300px]'>{v.description}</p>
                        <div className=' flex gap-3'>
                          
                            <h3>{v.price}</h3>
                            <span className=' font-light'>за человека</span>
                        </div>
                        

                    </Link>
                    </SwiperSlide>
                    
                )
                   
                    
                
             })
        }
        
      </Swiper>


        </div>
    )
}

export default Swproduct