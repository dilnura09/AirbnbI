import { createContext, useEffect, useState } from "react";

export const Likescontext = createContext();

const LikesProvider = ({ children }) => {
  const storage = JSON.parse(localStorage.getItem('likes-product')) || [];
  const [likesdata, setLikesdata] = useState(storage);

  const addLikes = (product) => {
    let check = likesdata.some((item) => item.id === product.id);
    if (!check) {
      let newData = [...likesdata, product];
      setLikesdata(newData);
      localStorage.setItem('likes-product', JSON.stringify(newData));
    }
  };

  const removelike = (id) => {
    const newData = likesdata.filter((item) => item.id !== id);
    setLikesdata(newData);
    localStorage.setItem('likes-product', JSON.stringify(newData));
  };

  useEffect(() => {
    localStorage.setItem('likes-product', JSON.stringify(likesdata));
  }, [likesdata]);

  return (
    <Likescontext.Provider value={{ likesdata, addLikes, removelike }}>
      {children}
    </Likescontext.Provider>
  );
};

export default LikesProvider;
