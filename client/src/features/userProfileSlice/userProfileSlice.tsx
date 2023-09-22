import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import tokenAuth from "../tokenAuth";

interface initialStateType {
  status: string;
}
const initialState: initialStateType = {
  status: "",
};
export const loadUserFeedAsync = createAsyncThunk<object>(
  "loadUserFeed",
  async (_, { rejectWithValue }) => {
    try {
      const data = await tokenAuth({
        url: "http://3.39.37.48:8080/api/v1/feed/feedDataUser/",
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
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userProfileEdit: (state) => {
      state.status = "edit";
    },
    userProfileEditDone: (state) => {
      state.status = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadUserFeedAsync.fulfilled, (state, payload) => {
      console.log(payload);
    });
    builder.addCase(loadUserFeedAsync.rejected, (state, payload) => {
      console.log(payload);
    });
  },
});

export const { userProfileEdit, userProfileEditDone } = userSlice.actions;
export default userSlice.reducer;
