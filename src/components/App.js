import React from "react";
// import { selectClothes } from "../actions";
import ClothesList from "../components/ClothesList";
import ClothesDetail from "../components/ClothesDetail";
// import AllClothesList from "../components/AllClothesList";

const App = () => {
  return (
    <div>
      <ClothesList />
      <ClothesDetail />
    </div>
  );
};

export default App;
