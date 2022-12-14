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

  // console.log("ð ~ itemsList ~ itemsList", itemsList);

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
    console.log("ð ~ typesList ~ items", items);

    const typesArray = items.reduce((nonDupes, item) => {
      //ç¬¬ä¸å¼æ°ï¼åæå¤ï¼åã¯ãç´åã®ã³ã¼ã«ããã¯ã§è¿ãããå¤ãç¬¬äºé¢æ°ï¼éååã§å¦çããã¦ããè¦ç´ 
      if (!nonDupes.includes(item.type)) {
        return [...nonDupes, item.type];
      } else {
        return nonDupes;
      }
    }, []);
    console.log("ð ~ typesArray ~ typesArray", typesArray);

    // const typesSet = new Set(allTypes);
    // console.log("ð ~ typesList ~ typesSet", typesSet);

    // const typesArray = [...typesSet];
    // console.log("ð ~ typesList ~ typesArray", typesArray);
    // mapé¢æ°ã¯éåã®æã ãä½¿ãã
    return typesArray.map((type) => (
      <div>
        <div
          key={type}
          onClick={() => {
            // console.log("Click Type", type);
            const filteredItems = items.filter((item) => item.type === type);

            // console.log("ð ~ typesList ~ filteredItems", filteredItems);
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
      console.log("ð ~ categoryList ~ category", category);
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
  console.log("ð ~ mapStateToProps ~ state", state);
  return { categories: state.categories };
};

export default connect(mapStateToProps, { selectClothes })(ClothesCategories);
