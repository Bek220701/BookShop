import React, { useContext, useEffect } from "react";
import { ArsenalBook } from "../Context/context";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Basket = () => {
  const nav = useNavigate();
  const { basket, setBasket,changePrice } = useContext(ArsenalBook);
  const addQuantity = (data) => {
    let changeBasket = basket.map((el) =>
      el.id === data.id ? { ...el, quantyti: el.quantyti + 1 } : el
    );
    localStorage.setItem("basket", JSON.stringify(changeBasket));
    setBasket(changeBasket);
  };
  const deceBasket = (data) => {
    let changeBasket = basket.map((el) =>
      el.id === data.id
        ? { ...el, quantyti: el.quantyti > 1 ? el.quantyti - 1 : 1 }
        : el
    );
    localStorage.setItem("basket", JSON.stringify(changeBasket));
    setBasket(changeBasket);
  };

  const addDelete = (proId) => {
    localStorage.setItem(
      "basket",
      JSON.stringify([...basket.filter((el) => el.id !== proId.id)])
    );
    readProduct();
  };
  const readProduct = () => {
    let res = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(res);
  };

  useEffect(() => {
    readProduct();
  }, []);

  let total = basket.reduce((acc, el) => {
    return acc + el.quantyti * el.price;
  }, 0);
  
  let valutaPrice = 1;
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
    <div id="basket">
      <div className="container">
        <div className="basket">
          {basket.length ? (
            <div class="relative mt-20 w-[1000px] overflow-x-auto shadow-md sm:rounded-lg ml-40">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      IMG
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Quantyti
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                {basket.map((el) => (
                  <tbody>
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <td class="px-6 py-4">
                       <Zoom classDialog="">
                       <img src={el.url} width={90} alt="img" />
                       </Zoom>
                      </td>
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {el.name}
                      </th>
                      <td class="px-6 py-4">{el.category}</td>
                      <td class="px-6 py-4 flex gap-5 mt-14">
                        <button onClick={() => deceBasket(el)}>-</button>
                        <h3>{el.quantyti}</h3>
                        <button onClick={() => addQuantity(el)}>+</button>
                      </td>
                      <td class="px-6 py-4">
                        {/* {el.price * el.quantyti} */}
                        <CountUp
                          start={0}
                          end={el.price * el.quantyti * valutaPrice}
                          duration={2.75}
                          decimals={0}
                        ></CountUp>
                        {valuta}
                      </td>
                      <td class="px-6 py-4">
                        <button
                          onClick={() => addDelete(el)}
                          type="button"
                          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
              
              <h1 className="ml-5" style={{
                fontSize:"24px"
              }}>TotalPrice : <CountUp
                          start={0}
                          end={total * valutaPrice}
                          duration={2.75}
                          decimals={0}
                        ></CountUp>{" "} {valuta}</h1>
            </div>
          ) : (
            <>
            <div
              class="flex items-center  w-[800px] ml-72 p-4 mt-20 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800"
              role="alert"
            >
              <svg
                class="flex-shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span class="sr-only">Info</span>
              <div>
                <span class="font-medium"> У вас еще нет продуктов !</span>
              </div>
              <button
                onClick={() => nav("/")}
                type="button"
                class=" flex ml-auto text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Пред
              </button>
            </div>
          </>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Basket;

