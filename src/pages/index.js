import React, { useContext, useState } from "react";
import { ArsenalBook } from "../Context/context";
import { useParams } from "react-router-dom";
import Zoom from 'react-medium-image-zoom'
import Review from "../Review";
import ProductCard from "../ProductCard";


const DetailsProduct = () => {
  const { productAll } = useContext(ArsenalBook);
  let { bookId } = useParams();
  const [mood , setMood] = useState(false)
  const findProduct = productAll.find((el) => el.id === +bookId);
  
  // let {  name, category, price, descrip} = findProduct
//   let proSlice = productAll.slice(0.300)
  return (
    <div id="detalis">
      <div className="container">
        <div className="detalis">
          <Zoom>
            <img src={findProduct.url} className="img-url"  alt="img" />
          </Zoom>
          <div className="detalis--text">
            <h1>
              <span>{findProduct.name}</span>
            </h1>
            <h1>
              category:<span>{findProduct.category}</span>
            </h1>
            <h1>
              discription: <span> {findProduct.descrip}
              </span> 
              {" "} <span onClick={()=> setMood(!mood)} className="more">{mood ? "more.." : "close..."}</span> 
            </h1>
          </div>
        </div>
        <Review/>
      </div>
    </div>
  );
};

export default DetailsProduct;
