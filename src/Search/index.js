import React, { useContext } from 'react';
import { ArsenalBook } from '../Context/context';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

const Search = () => {
    const {SearchName} = useParams()
  const nav = useNavigate();

    const {productAll,basket,setBasket} = useContext(ArsenalBook)
   
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
  let findSearch = productAll.find((el)=> el.name === SearchName)
  const {id,name,url,price,category} = findSearch
  let basIcon = basket.some((some) => some.id === findSearch.id);


  
    return (

        <div id="product">
      <div className="container">
        <div className="product">
          <div className="card--block">
            <Link 
            to={`/book/details/${id}`}
            >
            <img src={url} width={250} height={200} alt="img" />
            </Link>
            <div className="card--block__price">
              <h2>{price}$</h2>
              {!basIcon ? (
                <a onClick={() => addTobasket(findSearch)}>
                  <FaCartPlus />
                </a>
              ) : (
                <a onClick={() => nav("/basket")}>
                  <FaShoppingBasket />
                </a>
              )}
            </div>
            <h1>
              {name} / {category}
            </h1>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Search;