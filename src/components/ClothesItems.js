import React from "react";
import { connect } from "react-redux";

import ClothesItem from "./ClothesItem";

const ClothesItems = ({ items }) => {
  console.log("🚀 ~ ClothesItems ~ items", items);

  return (
    <div className="ClothesItems">
      {items?.length ? (
        items.map((item) => {
          return <ClothesItem key={item.product} item={item} />;
        })
      ) : (
        <p>No items! Select a category.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { items: state.selectedTypeByCategory };
};
export default connect(mapStateToProps)(ClothesItems);
