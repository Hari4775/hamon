import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Pages/productSlice";
import categorySlice from "./Pages/categorySlice";
import cartCountSlice from "./Pages/cartCountSlice";
import HotelSice from "./Pages/HotelSice";

const store = configureStore({
  reducer: {
    product: productSlice,
    category: categorySlice,
    cartCount: cartCountSlice,
    hotelData: HotelSice,
  },
});

export default store;
