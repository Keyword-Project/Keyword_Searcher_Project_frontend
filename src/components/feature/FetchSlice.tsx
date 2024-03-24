import { createSlice } from "@reduxjs/toolkit";

export const FetchSlice = createSlice({
  name: "queryString",
  initialState: {
    pathName: "",
    date: { startDate: "", endDate : ''},
  },
  reducers: {
    pathNameFetch: (state, action) => {
      state.pathName = action.payload;
    },
    dateFetch: (state, action) => {
      state.date = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { pathNameFetch, dateFetch } = FetchSlice.actions;

export default FetchSlice.reducer;
