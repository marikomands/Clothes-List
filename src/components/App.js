import React from "react";
import { selectClothes } from "../actions";
import ClothesList from "../components/ClothesList";

const App = () => {
  return (
    <div>
      <ClothesList />
    </div>
  );
};

export default App;
