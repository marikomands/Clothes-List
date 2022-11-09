import { combineReducers } from "redux";

const clothingCategoriesReducer = () => {
  return [
    {
      name: "Ladies",
      items: [
        { type: "Tops", product: "Simple Dalily T-Shirt", price: "12.00" },
        {
          type: "Tops",
          product: "Crew-Neck Long Sleeve T-shirt",
          price: "20.00",
        },
        { type: "Bottom", product: "Linen Trouser", price: "25.00" },
        { type: "Bottom", product: "Skinny Jeans", price: "20.00" },
        { type: "Shoes", product: "Comfortable Trainer", price: "30.00" },
        { type: "Shoes", product: "Comfortable Trainer", price: "30.00" },
        { type: "Bags", product: "Comfortable Trainer", price: "30.00" },
      ],
    },
    {
      name: "Men",
      items: [
        { type: "Tops", product: "Simple Dalily T-Shirt", price: "12.00" },
        { type: "Tops", product: "Simple Dalily T-Shirt", price: "12.00" },
        { type: "Bottoms", product: "Simple Dalily T-Shirt", price: "12.00" },
        { type: "Bottoms", product: "Simple Dalily T-Shirt", price: "12.00" },
        { type: "Bottoms", product: "Simple Dalily T-Shirt", price: "12.00" },
        { type: "Shoes", product: "Simple Dalily T-Shirt", price: "12.00" },
        { type: "Shoes", product: "Simple Dalily T-Shirt", price: "12.00" },
        { type: "Bags", product: "Simple Dalily T-Shirt", price: "12.00" },
      ],
    },
  ];
};

// {
//   id: 3,
//   category: "Ladies",
//   type: "Skirts",
//   name: "Long slit skirt",
//   price: "35.99",
// },

// {
//   id: 4,
//   category: "Men",
//   type: "Tops",
//   name: "Border relaxed T-shirt",
//   price: "25.99",
// },

// {
//   id: 5,
//   category: "Men",
//   type: "Tops",
//   name: "Dinosaur T-shirt",
//   price: "12.00",
// },
// {
//   id: 6,
//   category: "Children",
//   type: "Jeans",
//   name: "Relaxed fit jeans",
//   price: "25.00",
// },

// const clothesReducer = (selectedClothes = null, action) => {
//   if (action.type === "Select_Clothes") {
//     return action.payload;
//   }
//   return selectedClothes;
// };

const selectedClothesByCategoryReducer = (
  selectedClothesByCategory = null,
  action
) => {
  if (action.type === "Clothes_Category_Selected") {
    selectedClothesByCategory = clothingCategoriesReducer.filter(
      (clothingCategory) => {
        return clothingCategoriesReducer.name === action.payload;
      }
    );
  }

  return selectedClothesByCategory;
};

// const selectedClothesByCategoryReducer = (
//   selectedClothesByCategory = null,
//   action
// ) => {
//   if (action.type === "Clothes_Selected") {
//     return action.payload;
//   }
//   return selectedClothesByCategory;
// };

export default combineReducers({
  categories: clothingCategoriesReducer,
  selectedClothesByCategory: selectedClothesByCategoryReducer,
});
