import React from "react";
import { connect } from "react-redux";
// import AllClothesList from "./AllClothesList";

const ClothesDetail = ({ items }) => {
  if (!items) {
    return <div>Secelct an item</div>;
  }

  return items.map((item) => {
    return (
      <div key={item.product}>
        <h2>Product: {item.product}</h2>
        <h2>Price: {item.price}</h2>
      </div>
    );
  });
};

const mapStateToProps = (state) => {
  console.log("🚀 ~ mapStateToProps ~ state", state);
  console.log("🚀 ~ mapStateToProps ~ state", state);
  // console.log("🚀 ~ mapStateToProps ~ state", state);
  return { items: state.selectedTypeByCategory };
};

export default connect(mapStateToProps)(ClothesDetail);
