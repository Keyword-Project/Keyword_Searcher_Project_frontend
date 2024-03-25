import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Date {
  startDate : string,
  endDate : string
  
}

export const FetchSlice = createSlice({
  name: "queryString",
  initialState: {
    pathName: "",
    date: { startDate: "", endDate: "" },
  },
  reducers: {
    pathNameFetch: (state, action: PayloadAction<string>) => {
      state.pathName = action.payload;
    },
    dateFetch: (state, action: PayloadAction<Date>) => {
      state.date = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { pathNameFetch, dateFetch } = FetchSlice.actions;

export default FetchSlice.reducer;
