import React, { useEffect } from "react";
import { connect } from "react-redux";
import { selectClothes } from "../actions";

const ClothesCategories = ({ categories, selectClothes }) => {
  // const itemsList = (items) => {
  //   return items.map((item) => {
  //     return (
  //       <div key={items.name}>
  //         <div>{item.type}</div>
  //         <div>{item.product}</div>
  //       </div>
  //     );
  //   });
  // };

  // console.log("🚀 ~ itemsList ~ itemsList", itemsList);

  // const itemsList = (items) => {
  //   return items.map((item) => {
  //     return (
  //       <div className="item" key={item.name}>
  //         <div className="content">{item.type}</div>
  //         <div className="content">{item.product}</div>
  //       </div>
  //     );
  //   });
  // };

  const typesList = (items) => {
    console.log("🚀 ~ typesList ~ items", items);

    const typesArray = items.reduce((nonDupes, item) => {
      //第一引数：初期値（又は、直前のコールバックで返された値、第二関数：配列内で処理されている要素
      if (!nonDupes.includes(item.type)) {
        return [...nonDupes, item.type];
      } else {
        return nonDupes;
      }
    }, []);
    console.log("🚀 ~ typesArray ~ typesArray", typesArray);

    // const typesSet = new Set(allTypes);
    // console.log("🚀 ~ typesList ~ typesSet", typesSet);

    // const typesArray = [...typesSet];
    // console.log("🚀 ~ typesList ~ typesArray", typesArray);
    // map関数は配列の時だけ使える
    return typesArray.map((type) => (
      <div>
        <div
          key={type}
          onClick={() => {
            // console.log("Click Type", type);
            const filteredItems = items.filter((item) => item.type === type);

            // console.log("🚀 ~ typesList ~ filteredItems", filteredItems);
            selectClothes(filteredItems);
          }}
        >
          {type}
        </div>
      </div>
    ));
  };

  const categoryList = () => {
    return categories.map((category) => {
      console.log("🚀 ~ categoryList ~ category", category);
      return (
        <div key={category.name}>
          <p>{category.name}</p>
          {typesList(category.items)}
        </div>
      );
    });
  };

  return <div className="ClothesCategories">{categoryList()}</div>;
};

const mapStateToProps = (state) => {
  console.log("🚀 ~ mapStateToProps ~ state", state);
  return { categories: state.categories };
};

export default connect(mapStateToProps, { selectClothes })(ClothesCategories);
