import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./ClothesList.css";
import { selectClothes } from "../actions";

// import AllClothesList from "./AllClothesList";

const ClothesItems = ({ items, selectClothes, searchTerm, per_page }) => {
  useEffect(() => {
    const items = async () => {
      const { data } = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query: searchTerm, per_page: 2 },
          headers: {
            Authorization:
              "Client-ID fmAnr5mkf9QbV8cgJu59tZSYYSH_wyyZwquCAu-7S2M",
          },
        }
      );
      selectClothes(data);
    };
  }, []);

  if (!items) {
    return <div>Secelct an item</div>;
  }

  return items.map((item) => {
    return (
      <div className="itemList" key={item.product}>
        <h2>Product: {item.product}</h2>
        <h2>Price: {item.price}</h2>
      </div>
    );
  });
};

const mapStateToProps = (state) => {
  // console.log("🚀 ~ mapStateToProps ~ state", state);
  return { items: state.selectedTypeByCategory };
};
export default connect(mapStateToProps, { selectClothes })(ClothesItems);
