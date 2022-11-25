export const selectClothes = (items) => {
  console.log("🚀 ~ selectClothes ~ items", items);
  return {
    type: "Clothes_Selected",
    payload: items,
  };
};

// export const selectClothingCategory = (category) => {
//   return {
//     type: "Clothes_Category_Selected",
//     payload: category,
//   };
// };

// selectClothingCategory("Men");
