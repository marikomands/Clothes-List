// export const selectClothes = (clothes) => {
//   return {
//     type: "Select_Clothes",
//     payload: clothes,
//   };
// };

export const selectClothingCategory = (category) => {
  return {
    type: "Clothes_Category_Selected",
    payload: category,
  };
};

// selectClothingCategory("Men");
