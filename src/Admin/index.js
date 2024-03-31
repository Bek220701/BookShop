import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArsenalBook } from "../Context/context";
import { BsEyeSlashFill } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import { type } from "@testing-library/user-event/dist/type";

const Admin = () => {
  const { setModal, setAdmin } = useContext(ArsenalBook);
  const [inputValue, setInputValue] = useState("");
  const [pass, setPass] = useState(false);
  const nav = useNavigate();
  const addProduct = () => {
    nav("/addProduct");
    setModal(false);
    setAdmin(true);
  };
  const errorMessege = () => {
    toast.error("Не верный пороль!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const inPro = () => {
    if (inputValue === "2207") {
      addProduct();
    } else {
      errorMessege();
    }
    setInputValue("")

  };
  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <h2 onClick={() => setModal(false)}>X</h2>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type={ !pass? "password" : "text" }
            placeholder="Password.."
          />
         {
          !pass ?  <h1 onClick={()=>setPass(!pass)}>
            <BsEyeSlashFill />
          </h1> :
          <h1 onClick={()=>setPass(!pass)}>
            <BsEyeFill />
          </h1>
         }
          <button onClick={() => inPro()}>SIGN IN</button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Admin;
