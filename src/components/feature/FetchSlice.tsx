import { createSlice } from "@reduxjs/toolkit";

export const FetchSlice = createSlice({
  name: "queryString",
  initialState: {
    pathName: "",
  },
  reducers: {
    pathNameFetch: (state, action) => {
      state.pathName = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { pathNameFetch } = FetchSlice.actions;

export default FetchSlice.reducer;
