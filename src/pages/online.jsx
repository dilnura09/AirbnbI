import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Swproduct from '../components/swiperproduct';
import Swproduct2 from '../components/swiperproduct2';


import { FreeMode, Pagination } from 'swiper/modules';
import Layout from '../components/Layout';


const Online=()=>{
    return(
        <Layout >
          <div className=" mt-[70px]  font-semibold max-w-[1650px] mx-auto">
            <h1 className='text-4xl'>Новинки недели</h1>
            <div className=' mt-[50px]'>
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode,]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=1440" alt=""  className=' rounded-xl ' /></SwiperSlide>
        <SwiperSlide><img src="https://a0.muscache.com/im/pictures/2fe40f4f-5ea3-432f-9fbd-e2ce3c6c3855.jpg?im_w=1440" alt="" className=' rounded-xl ' /></SwiperSlide>
        <SwiperSlide><img src="https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=1440" alt="" className=' rounded-xl ' /></SwiperSlide>
        <SwiperSlide><img src="https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=1440" alt="" className=' rounded-xl ' /></SwiperSlide>
        
      </Swiper>

            </div>
            <div className=' mt-[40px]'>

                <h2 className='text-4xl'>Хозяева со всего мира помогут спланировать поездку</h2>
                <Swproduct/>
                <Swproduct2/>
            </div>

            </div>

        
        </Layout>
    )
}

export default Online