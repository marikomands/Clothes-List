import React from "react";
// import { selectClothes } from "../actions";
import ClothesList from "../components/ClothesList";
import ClothesItems from "./ClothesItems";
import "./App.css";
// import AllClothesList from "../components/AllClothesList";

const App = () => {
  // const fetchImages = async ({searchTerm, per_page = 10}) => {
  // try {
  //   setError(false);
  //     const { data } = await axios.get(
  //       "https://api.unsplash.com/search/photos",
  //       {
  //         params: {
  //           query: searchTerm,
  //           per_page,
  //         },
  //         // params: { query: term},
  //         headers: {
  //           Authorization:
  //             "Client-ID lk1sHfESga4bPGg0Xt0EbcMzx1IcuYw0uThfuucVPmg",
  //         },
  //       }
  //     );

  // const image=fetchImages({searchTerm: 'dress', per_page:1})

  return (
    <div className="component">
      <ClothesList />
      <ClothesItems />
    </div>
  );
};

export default App;
