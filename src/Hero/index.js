import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import heroImg from "../img/image 112.png";
import ProductCard from "../ProductCard";
import { ArsenalBook } from "../Context/context";
import { BsArrowRightShort } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Category from "../Category";

const Hero = () => {
  const { productAll, setProductAll, darkMood } = useContext(ArsenalBook);
  const [value, setValue] = useState("");
  const [count, setCount] = useState(4);
  let all = productAll;
  const eventChange = () => {
    if (value === "cheap") {
      let res = all.sort((a, b) => b.price - a.price);
      setProductAll(res);
    } else if (value === "expensive") {
      let res = all.sort((a, b) => a.price - b.price);
      setProductAll(res);
    } else if (value === "A-Z") {
      let res = all.sort((a, b) => (a.name.length > b.name.length ? -1 : 1));
      setProductAll(res);
    } else if (value === "A-Z") {
      let res = all.sort((a, b) => (a.name.length < b.name.length ? -1 : 1));
      setProductAll(res);
    }
  };

  let filterCategory = productAll.filter((el, idx, arr) => {
    return (
      idx ===
      arr.findIndex((e) => {
        return e.category === el.category;
      })
    );
  });

  eventChange();
  useEffect(() => {
    eventChange();
  }, [value]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div id="hero">
        <Slider {...settings}>
          <div>
            <img src={heroImg} alt="img" />
          </div>
          <div>
            <img src={heroImg} alt="img" />
          </div>
          <div>
            <img src={heroImg} alt="img" />
          </div>
          <div>
            <img src={heroImg} alt="img" />
          </div>
          <div>
            <img src={heroImg} alt="img" />
          </div>
          <div>
            <img src={heroImg} alt="img" />
          </div>
        </Slider>
        {productAll.length ? 
        <div className="container">
          <h1>Категории</h1>
          <div className="detal--block overflow-x-scroll">
            {productAll.map((el) => (
              <Category el={el} />
            ))}
          </div>
          <div className="text">
            <h1>Возможно, Вам понравится</h1>
            <select
              onChange={(e) => setValue(e.target.value)}
              className="select"
            >
              <option value="expensive">Expensive</option>
              <option value="cheap">Cheap</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
          </div>
          <div className="products">
            {productAll.slice(0, count).map((el) => (
              <ProductCard el={el} />
            ))}
            </div>
           
          {productAll.length >= 4 ? (
            <button className="btn" onClick={() => setCount(count + 4)}>
              Показать ещё
              <BsArrowRightShort />
            </button>
          ) : null}
        </div>
         : null}

        
      </div>
    </>
  );
};

export default Hero;
