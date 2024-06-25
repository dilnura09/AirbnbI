import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./components/button";
import { FilterContext } from "./context/filter";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [input, setInput] = useState("");
  const { proud } = useContext(FilterContext);
  const [result, setResult] = useState([]);

  function handlerSearch(input) {
    setInput(input);
    if (input.trim().length > 0) {
      setResult(
        proud.filter(el => {
          return el.title
            .toLowerCase()
            .trim()
            .includes(input.toLowerCase().trim());
        })
      );
    } else {
      setResult([]);
    }
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="border-b-2 border-gray-100 bg-white mb-[50px] fixed top-0 h-[110px] w-full z-50">
      <nav className="flex items-start justify-between w-[100%] fixed top-0">
        <Link to={"/"}><img src="02.jpg" alt="error" className="w-[200px] m-[20px] hidden lg:block xl:block 2xl:block" /></Link>
        <div className={`flex-col gap-[30px] min-w-[600px] p-[60px]`}>
          <div
            className={`flex justify-center items-center gap-3 mb-[40px] ${
              scrollY > 100 ? "hidden" : "flex"
            }`}
          >
            <NavLink to={"/"} className={` p-2 rounded-full`}>Жилье</NavLink>
            <h1>Впечатления</h1>
            <NavLink to={"/online"} className={` p-2 rounded-full`}>Онлайн-Впечатления</NavLink>
          </div>
          <div
            className={`h-[60px] block  top-0 transition-all relative rounded-lg ${
              scrollY > 100 ? "w-[500px] fixed" : "w-[850px] bg-white"
            }`}
          >
            <input
              onChange={(e) => handlerSearch(e.target.value)}
              value={input}
              type="text"
              placeholder="Search"
              className="w-[100%] border-2 h-[40px] rounded-full p-5"
            />
            {result.length > 0 && (
              <div className="bg-[white] absolute top-[50px] w-[100%] border-2 rounded-lg">
                {result.map(el => (
                  <Link to={`/product/${el.id}`} key={el.id}>
                    <p className="border-b p-[5px] hover:bg-gray-100">{el.title}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className=" hidden lg:flex xl:flex 2xl:flex gap-5 mt-[50px] items-center mx-7">
          <h1 className="font-medium ">Сдать жилье на Airbnb</h1>
          <img src="03.png" alt="" className="h-[20px]" />
          <Button/>
        </div>

        <div className=" flex items-center justify-center gap-4 fixed bottom-0 w-full bg-white p-4 border-t-2 lg:hidden xl:hidden 2xl:hidden">
          <div className=" flex flex-col items-center justify-center">
            <img src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-256.png" alt="" className=" h-6"/>
            <span>Поиск</span>
          </div>
          <Link to={"/wishlisti"} className=" flex flex-col items-center justify-center">
            <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-256.png" className=" h-6" alt="" />
            <span>Вишлисты</span>
          </Link>
          <div className="flex flex-col items-center justify-cente">
            <img src="05.jpg" alt="" className=" h-6" />
            <span>Войти</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
