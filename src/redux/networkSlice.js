import { createSlice } from "@reduxjs/toolkit";

const networkSlice = createSlice({
  name: "network",
  initialState: {
    isOnline: true,
  },
  reducers: {
    setNetwork: (state, action) => {
      state.isOnline = action.payload;
    },
  },
});
export const { setNetwork } = networkSlice.actions;
export default networkSlice.reducer;
