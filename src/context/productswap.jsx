import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Productcontext = createContext();

const Productswapprovider = ({ children }) => {
  const [swproduct, setSwproduct] = useState([]);
  const [swproduct2, setSwproduct2] = useState([]);

  const getswProduct = async () => {
    try {
      const response = await axios.get("https://3641693fd61b653b.mokky.dev/caruselproduct");
      setSwproduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getswProduct2 = async () => {
    try {
      const response = await axios.get("https://3641693fd61b653b.mokky.dev/caruselproduct2");
      setSwproduct2(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getswProduct();
    getswProduct2();
  }, []);

  return (
    <Productcontext.Provider value={{ swproduct, swproduct2 }}>
      {children}
    </Productcontext.Provider>
  );
};

export default Productswapprovider;
