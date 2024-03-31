import React, { useContext, useState } from "react";
import logo from "../img/BOOKShop (1).png";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

import Admin from "../Admin";
import { ArsenalBook } from "../Context/context";

const Header = () => {
  const nav = useNavigate();
  const { modal, setModal, admin, basket, setChangePrice, darkMood, setDarkMood } =
    useContext(ArsenalBook);
  const [input, setInput] = useState("");
  // const addBtn = () =>{
  // nav(`/search/${input}`)
  // setInput("")
  // }
  console.log(input);
  return (
    <div id="header">
      <div className="container">
        <div className="header flex items-center justyfi-between">
        <div className="header--top">
          <Link to={"/"}>
            <img classNameName="img" src={logo} alt="img" />
          </Link>
          <div className="icons">
            {
              !darkMood ? <h1
              onClick={()=> setDarkMood(!darkMood)} style={{
                color: "yellow"
              }}>
              <MdSunny />
            </h1> :
            <h1 onClick={()=> setDarkMood(!darkMood)}
            style={{
              color: "gray"
            }}>
              <MdDarkMode />
            </h1>
            }
          </div>
          </div>
          <div className="header--nav">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Search here"
            />
            <button className="inpBtn" onClick={() => nav(`/search/${input}`)}>
              saerch
            </button>
            <h3>
              <CiSearch />
            </h3>
            {basket.length ? <h4>{basket.length}</h4> : null}
            <select
              className="sele"
              onChange={(e) => setChangePrice(e.target.value)}
            >
              <option value="usd">USD</option>
              <option value="kgz">KGZ</option>
              <option value="rub">RUB</option>
              <option value="eur">EUR</option>
              <option value="kzt">KZT</option>
              <option value="cny">CNY</option>
            </select>
            <Link to={"/basket"}>
              Корзина <br /> <IoMdCart />
            </Link>
            {!admin ? (
              <Link onClick={() => setModal(true)} to={"/admin"}>
                Админ <br /> <FaCircleUser />
              </Link>
            ) : null}
          </div>
        </div>
        {modal ? (
          <div onClick={() => setModal(false)} className="bg"></div>
        ) : null}
        {modal ? <Admin /> : null}
      </div>
    </div>
  );
};

export default Header;
