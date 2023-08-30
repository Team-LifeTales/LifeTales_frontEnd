import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import tokenAuth from "../tokenAuth";
interface loginSuccess {
  id: string;
  pwd: number;
}

interface loginInfo {
  id: string;
  pwd: string;
}

interface initialStateType {
  object: Array<loginSuccess>;
}
const initialState: initialStateType = {
  object: [],
};
export const loginAsync = createAsyncThunk<loginSuccess, loginInfo>(
  "login",
  async (loginData, { rejectWithValue }) => {
    try {
      const { data, headers } = await tokenAuth({
        url: "",
        method: "post",
        data: {
          id: `${loginData.id}`,
          pwd: `${loginData.pwd}`,
        },
      });
      Cookies.set("Authorization", headers.Authorization, {
        expires: new Date().getHours() + 1,
        path: "/",
      });
      return data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log(e);
        console.log(e.response);
        throw e.response;
      }
      return rejectWithValue("No user found");
    }
  }
);
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logOut: (state) => {
      Cookies.remove("Authorization");
      state.object = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAsync.fulfilled, (state, { payload }) => {
      console.log(payload);
    });
    builder.addCase(loginAsync.rejected, (state, payload) => {
      console.log(payload);
    });
  },
});
export const { logOut } = loginSlice.actions;
export default loginSlice.reducer;
