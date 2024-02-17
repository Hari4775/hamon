import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: [],
  reducers: {
    setCategoryData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCategoryData } = categorySlice.actions;
export default categorySlice.reducer;
