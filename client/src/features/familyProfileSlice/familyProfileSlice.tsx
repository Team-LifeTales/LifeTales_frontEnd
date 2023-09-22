import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import tokenAuth from "../tokenAuth";

interface initialStateType {
  status: string;
}
const initialState: initialStateType = {
  status: "",
};
export const loadFamilyFeedAsync = createAsyncThunk<object>(
  "loadFamilyFeed",
  async (_, { rejectWithValue }) => {
    try {
      const data = await tokenAuth({
        url: "http://3.39.37.48:8080/api/v1/feed/feedDataFamily/",
        method: "get",
      });
      console.log(data);
      return data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log(e);
        console.log(e.response);
        throw e.response?.status;
      }
      return rejectWithValue("No user found");
    }
  }
);
export const familySlice = createSlice({
  name: "family",
  initialState,
  reducers: {
    familyProfileEdit: (state) => {
      state.status = "edit";
    },
    familyProfileEditDone: (state) => {
      state.status = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadFamilyFeedAsync.fulfilled, (state, payload) => {
      console.log(payload);
    });
    builder.addCase(loadFamilyFeedAsync.rejected, (state, payload) => {
      console.log(payload);
    });
  },
});

export const { familyProfileEdit, familyProfileEditDone } = familySlice.actions;
export default familySlice.reducer;
