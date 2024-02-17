import { createSlice } from "@reduxjs/toolkit";

const cartCountSlice = createSlice({
  name: "cartCount",
  initialState: 0,
  reducers: {
    increaseCount: (state) => {
      return state + 1;
    },
    decreaseCount: (state) => {
      return state - 1 >= 0 ? state - 1 : 0;
    },
    setCartCount: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCartCount, increaseCount, decreaseCount } =
  cartCountSlice.actions;
export default cartCountSlice.reducer;
