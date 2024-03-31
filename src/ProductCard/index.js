import React, { useContext, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { ArsenalBook } from "../Context/context";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ el }) => {
  const { productAll, basket, setBasket, setProductAll, changePrice ,darkMood} =
    useContext(ArsenalBook);
  const nav = useNavigate();
  const addTobasket = (product) => {
    let findBas = basket.find((el) => el.id === product.id);
    if (findBas) {
      let changeBas = basket.map((el) =>
        el.id === product.id ? { ...el, quantyti: el.quantyti + 1 } : el
      );
      localStorage.setItem("basket", JSON.stringify(changeBas));
      setBasket(changeBas);
    } else {
      let res = [...basket, product];
      setBasket(res);
      localStorage.setItem("basket", JSON.stringify(res));
    }
  };
  let basIcon = basket.some((some) => some.id === el.id);

  const deletePro = (data) => {
    let deleFilter = productAll.filter((el) => el.id !== data.id);
    localStorage.setItem("product", JSON.stringify(deleFilter));
    setProductAll(deleFilter);
  };
  let valutaPrice = +el.price;
  let valuta = "$";
  if (changePrice === "kgz") {
    valutaPrice = valutaPrice * 89.55;
    valuta = "C";
  } else if (changePrice === "eur") {
    valuta = "€";
    valutaPrice = valutaPrice * 0.91;
  } else if (changePrice === "rub") {
    valutaPrice = valutaPrice * 92.4;
    valuta = "₽";
  } else if (changePrice === "kzt") {
    valutaPrice = valutaPrice * 450.68;
    valuta = " ₸";
  } else if (changePrice === "cny") {
    valutaPrice = valutaPrice * 7.2;
    valuta = "¥";
  }

  return (
    <div id="product">
      <div className="container">
        <div className="product" >
          <div className="card--block" style={{
          background : !darkMood ? " " : "white",
          color : !darkMood ? " " : "black"
        }}>
            <Link to={`/book/details/${el.id}`}>
              <img src={el.url} width={250} height={400} alt="img" />
            </Link>
            <div className="card--block__price">
              <h2>
                {Math.trunc(valutaPrice)} {valuta}
              </h2>
              {!basIcon ? (
                <a onClick={() => addTobasket(el)}>
                  <FaCartPlus />
                </a>
              ) : (
                <a onClick={() => nav("/basket")}>
                  <FaShoppingBasket />
                </a>
              )}
            </div>
            <h1>
              {el.name} / {el.category}
            </h1>
            <button onClick={() => deletePro(el)}>
              <MdDeleteForever />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
