import "./App.scss";

import { Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import Basket from "./Basket";
import AddProduct from "./AddProduct";
import Header from "./Header";
import DetailsProduct from "./pages";
import CategoryProduct from "./CategoryProduct";
import Search from "./Search";
import { useContext } from "react";
import { ArsenalBook } from "./Context/context";

function App() {
  const {darkMood} = useContext(ArsenalBook)
  return (
    <div className="App" style={{
     color: darkMood ?  "white" : "black",
     background: !darkMood ? "white" : "black",
    }}>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/book/details/:bookId" element={<DetailsProduct />} />
        <Route
          path="/categoryProduct/:categoryBook"
          element={<CategoryProduct />}
        />
        <Route path="/search/:SearchName" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
