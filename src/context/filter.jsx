import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const FilterContext = createContext();

const Productprovider = ({ children }) => {
  const [proud, Setproud] = useState([]);
  const [product, setProduct] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('https://3641693fd61b653b.mokky.dev/card1');
      Setproud(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async () => {
    try {
      const response = await axios.get('https://3641693fd61b653b.mokky.dev/product2');
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    getProduct();
  }, []);

  return (
    <FilterContext.Provider value={{ proud, product }}>
      {children}
    </FilterContext.Provider>
  );
};

export default Productprovider;
