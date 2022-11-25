import { combineReducers } from "redux";

const clothingCategoriesReducer = () => {
  return [
    {
      name: "Ladies",
      items: [
        {
          type: "Tops",
          product: "Simple Dalily T-Shirt",
          price: "12.00",
          query: "t-shirts",
          // category: "Ladies",
        },
        {
          type: "Tops",
          product: "Crew-Neck Long Sleeve T-shirt",
          price: "20.00",
          query: "Crew-neck, t-shirts",
        },
        {
          type: "Bottom",
          product: "Linen Trouser",
          price: "25.00",
          query: "linen, trousers",
        },
        {
          type: "Bottom",
          product: "Skinny Jeans",
          price: "20.00",
          query: "skinny, jeans",
        },
        {
          type: "Shoes",
          product: "Court Shoes",
          price: "30.00",
          query: "chunky, heels",
        },
        {
          type: "Shoes",
          product: "Comfortable Trainer",
          price: "30.00",
          query: "trainners",
        },
        {
          type: "Bags",
          product: "Daily Backpack",
          price: "30.00",
          query: "backpacks",
        },
        {
          type: "Accesories",
          product: "Warm Gloves",
          price: "30.00",
          query: "gloves",
        },
      ],
    },
    {
      name: "Men",
      items: [
        { type: "Tops", product: "Simple Dalily T-Shirt", price: "12.00" },
        { type: "Tops", product: "Going-out Shirt", price: "12.00" },
        { type: "Bottoms", product: "Simple Dalily Trouser", price: "12.00" },
        { type: "Bottoms", product: "Wide Pants", price: "12.00" },
        { type: "Bottoms", product: "Stretchy Jeans", price: "12.00" },
        { type: "Shoes", product: "Runner's Trainers", price: "12.00" },
        { type: "Shoes", product: "Casual Shoes", price: "12.00" },
        { type: "Bags", product: "Large Backpack", price: "12.00" },
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

// const clothesReducer = (selectedType = null, action) => {
//   if (action.type === "Select_Clothes") {
//     return action.payload;
//   }
//   return selectedType;
// };

// const selectedClothesByCategoryReducer = (
//   selectedClothesByCategory = null,
//   action
// ) => {
//   if (action.type === "Clothes_Category_Selected") {
//     selectedClothesByCategory = clothingCategoriesReducer.filter(
//       (clothingCategory) => {
//         return clothingCategoriesReducer.name === action.payload;
//       }
//     );
//   }

//   return selectedClothesByCategory;
// };

const selectedTypeByCategoryReducer = (state = null, action) => {
  if (action.type === "Clothes_Selected") {
    return action.payload;
  }
  return state;
};

export default combineReducers({
  categories: clothingCategoriesReducer,
  // selectedClothesByCategory: selectedClothesByCategoryReducer,
  selectedTypeByCategory: selectedTypeByCategoryReducer,
});
