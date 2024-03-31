import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

const Category = ({ el }) => {
  const { category } = useParams;
  const nav = useNavigate();
  return (
    <div className="categ flex">
      <div
        className="category"
        style={{
          background:
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_-tJ77RAVyUCzvXH8Jj_aU1vWMkpqPUhxQ&usqp=CAU",
          borderRadius: "10px",
        }}
      >
        <div className="category--nav">
          <button onClick={() => nav(`/categoryProduct/${el.category}`)}>
            {el.category}
          </button>
          <h2>
            <BsArrowRightShort />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Category;
