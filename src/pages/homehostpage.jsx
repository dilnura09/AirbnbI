import Layout from "../components/Layout"

const Homehost =  ()=>  {
    return(
        <Layout>
            <div className=" max-w-[1800px] mx-auto">
           <h1 className=" text-6xl text-center mt-[70px] mb-[30px] font-medium">Запуститесь без труда с «Airbnb Старт» </h1>
           <img src="https://a0.muscache.com/im/pictures/ecf71c14-23ed-4c61-adde-ae54ec2ebc10.jpg?im_w=2560&im_q=highq" alt="" />
           <div className=" mt-[30px] flex items-center justify-between">
            <div className=" ">
                <h3 className=" text-2xl font-bold">Советы персонального наставника</h3>
                <p className=" text-xl text-gray-600">Мы познакомим вас с суперхозяином, <br /> живущим в вашем регионе, и он ответит на <br /> все вопросы, серьезные и не очень. Вы можете общаться в чате <br /> и созваниваться — по телефону или с видео.</p>
            </div>

            <div className=" w-[400px]">
                <h3 className=" text-2xl font-bold">Первое бронирование — от опытного путешественника</h3>
                <p className=" text-xl text-gray-600">Если захотите, первое бронирование сможет оформить только гость, у которого в истории как минимум три поездки и хорошая репутация на Airbnb.</p>
            </div>

            <div className=" w-[400px]">
                <h3 className=" text-2xl font-bold">Специализированная помощь от Airbnb</h3>
                <p className=" text-xl text-gray-600">Новички одним касанием могут связаться с сотрудниками поддержки, которые умеют решать любые проблемы: хоть с аккаунтом, хоть с выставлением счета.</p>
            </div>
            
           </div>
                 <div className=" flex items-center justify-center mt-[50px]">
           <img src="https://a0.muscache.com/im/pictures/be5b1c16-7190-434c-8f62-e526a63e96b2.jpg?im_w=480&im_q=highq" alt="" />
           </div>
           </div>
        </Layout>
    )
}

export default Homehost