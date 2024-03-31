import React, {children, useEffect, useState } from "react";
import { ArsenalBook } from "./context";

const RootContext = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [productAll, setProductAll] = useState([]);
  const [basket, setBasket] = useState([]);
  const [changePrice , setChangePrice] = useState("")
  const [darkMood ,setDarkMood] = useState (false)

  const readProduct = () => {
    let res = JSON.parse(localStorage.getItem("product")) || [];
    setProductAll(res);
    let bas = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(bas);
  };

  useEffect(() => {
    readProduct();
  }, []);
  return (
    <ArsenalBook.Provider
      value={{
        modal,
        admin,
        productAll,
        basket,
        changePrice,
        darkMood,
        setModal,
        setAdmin,
        setProductAll,
        setBasket,
        setChangePrice,
        setDarkMood,
      }}
    >
      {children}
    </ArsenalBook.Provider>
  );
};

export default RootContext;
