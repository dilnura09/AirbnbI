import { Link } from "react-router-dom"

const Pagenot =()=>{
  return(
    <div className=" max-w-[1500px] mx-auto flex items-center justify-center gap-[200px]">
      <div>
        <h1 className="text-[200px] font-bold mt-[30px]  text-gray-600">Oops!</h1>
        <h3 className=" text-[50px] font-semibold text-gray-600">We can't seem to find the page you're <br /> looking for.</h3>
        <h6 className=" text-2xl text-gray-400 mb-[40px]">Error code: 404</h6>
        <Link to={'/'} className=" bg-gray-400 p-3 rounded-md mt-[50px]">Home page</Link>
      </div>

      <div>
        <img src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif" alt="" />
      </div>
    </div>
  )
}

export default Pagenot
