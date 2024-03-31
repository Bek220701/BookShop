import React, { useContext } from "react";
import { ArsenalBook } from "../Context/context";
import { useNavigate, useParams } from "react-router-dom";
import CategoryProductCard from "../CategoryProductCard";

const CategoryProduct = () => {
  const { categoryBook } = useParams();
  const { productAll } = useContext(ArsenalBook);

  let filterCategory = productAll.filter((el) => el.category === categoryBook);

  return (
    <div className="container">
      <div className="categoryProduct">
        {filterCategory.map((el) => (
          <CategoryProductCard el={el} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;
