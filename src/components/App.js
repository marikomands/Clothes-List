import React from "react";
import ClothesCategories from "../components/ClothesCategories";
import ClothesItems from "./ClothesItems";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ClothesCategories />
      <ClothesItems />
    </div>
  );
};

export default App;
