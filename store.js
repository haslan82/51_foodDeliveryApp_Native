import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./src/slices/cartSlice";
import restaurantReducer from "./src/slices/restaurantSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    restaurant: restaurantReducer,
  },
});

export default store;
