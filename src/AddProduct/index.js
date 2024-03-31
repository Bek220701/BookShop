import React, { useContext, useState } from "react";
import { ArsenalBook } from "../Context/context";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const nav = useNavigate()
  const [productImg, setProductImg] = useState("");
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [description, setDiscription] = useState("");
  const { productAll, setProductAll,setAdmin,darkMood } = useContext(ArsenalBook);
  
  // const someProduct  = () =>{
    let someProduct = productAll.some((el)=> el.category === productCategory)
console.log(someProduct, "barda");
// if (someProduct) {
//   let todo = productAll.map((el)=> el.category === productCategory ? {...el, category:el.category + 1} : el) 
//   setProductAll(todo)
//   localStorage.setItem("product",JSON.stringify(todo))
//   // console.log(todo,"bar");
// }

  // }

  const addToProduct = () => {
    if (
      productName.trim() === "" ||
      productCategory.trim() === "" ||
      productPrice.trim() === "" ||
      description.trim() === ""
    ) {
      alert("Зополните пустые поле !!!");
      // } else if (productAll.some((el)=> el.category ===  productCategory)) {
      //   alert("error")
    } else {
      let obj = {
        id: productAll.length ? productAll[productAll.length - 1].id + 1 : 1,
        url: productImg,
        name: productName,
        category: productCategory,
        price: productPrice,
        descrip: description,
        quantyti: 1,
      };
      let data = JSON.parse(localStorage.getItem("product")) || [];
      let result = [...data, obj];
      setProductAll(result);
      localStorage.setItem("product", JSON.stringify(result));
      setProductName("");
      setProductCategory("");
      setProductPrice("");
      setDiscription("");
      setProductImg("");
      nav("/")
      setAdmin(false)
    }
  };
  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProductImg(reader.result);
    reader.readAsDataURL(file);
  };
  const enterAdd = (e) =>{
    if (e.key==="Enter") {
        addToProduct()
    }
  }

  console.log(productAll);
  return (
    <div id="addProduct">
      <div className="container">
        <div className="addProduct">
          <label className="input-file" onChange={onChange}>
            <input type="file" name="file" />
            <span class="input-file-btn">Выберите файл</span>
          </label>
          <div className="addProduct--inputs">
            <input
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              type="text"
              className="addProduct--inputs__name"
              placeholder="Product Name"
            />
            <div className="addProduct--inputs__flex">
              <input
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                type="text"
                className="addProduct--inputs__flex--category"
                placeholder="Category"
              />
              <input
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                type="text"
                className="addProduct--inputs__flex--price"
                placeholder="Price"
              />
            </div>
            <textarea onKeyDown={enterAdd}
              value={description}
              onChange={(e) => setDiscription(e.target.value)}
              name=""
              id=""
              cols="34"
              rows="12"
              placeholder="Product description..."
            ></textarea>
            <button onClick={() => addToProduct()} style={{
              background : darkMood ? "white" : "",
              color :  darkMood ? "black" : "",
              // border: darkMood ?  "none" : ""
            }}>SAVE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
