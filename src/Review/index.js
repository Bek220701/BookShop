import React, { useState } from "react";

const Review = () => {
  const [inp, setInp] = useState("");
  const [mass, setMass] = useState([]);
  const revievInp = () => {
    if (inp.trim() === "") {
      alert("error");
    } else {
      let newObj = {
        id: Date.now(),
        // mass.length ? mass[mass.length - 1].id + 1 : 1,
        text: inp,
      };
      let todo = JSON.parse(localStorage.getItem("review")) || [];
      let res = [...todo, newObj];
      localStorage.setItem("review", JSON.stringify(res));
    }
    setInp("");
  };
  return (
    <div className="container">
      <div class="mt-36 flex gap-5">
        <label
          for="large-input"
          class="block mb-2 text-2xl font-medium text-black-900 dark:text-white"
        ></label>
        <input
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          type="text"
          id="large-input"
          class="block w-[600px] ml-20 p-4 text-black-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <button
          onClick={() => revievInp()}
          type="button"
          class="text-blue-700 text-xl hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
         Sign up
        </button>
      </div>
      {mass.map((el) => (
        <div className="block">
          <h1>{el.text}</h1>
        </div>
      ))}
    </div>
  );
};

export default Review;
