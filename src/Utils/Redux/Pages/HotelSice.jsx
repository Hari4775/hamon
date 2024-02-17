import { createSlice } from "@reduxjs/toolkit";

const hotelSlice = createSlice({
  name: "hotelData",
  initialState: [],
  reducers: {
    setHotelData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setHotelData } = hotelSlice.actions;
export default hotelSlice.reducer;
