import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Date {
  startDate: string ;
  los: number;
}

export const FetchSlice = createSlice({
  name: "queryString",
  initialState: {
    pathName: "",
    date: { startDate: "", los: 0 },
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

export const { pathNameFetch, dateFetch } = FetchSlice.actions;

export default FetchSlice.reducer;
