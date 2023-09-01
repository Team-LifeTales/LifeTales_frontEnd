import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { signUpInputs } from "../../component/signUp/SignUp";
interface signupSuccess {
  id: string;
  pwd: number;
}

interface initialStateType {}
const initialState: initialStateType = {
  confirm: { id: "", email: "" },
};
export const loginAsync = createAsyncThunk<signupSuccess, signUpInputs>(
  "signupAsync",
  async (signupData, { rejectWithValue }) => {
    try {
      const { data, headers } = await axios({
        url: "http://3.39.37.48:8080/api/v1/users/basic/signUp/detail",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        method: "post",
        data: {
          id: signupData.id,
          password: signupData.password,
          name: signupData.name,
          email: signupData.email,
          nickName: signupData.nickName,
          phoneNumber: signupData.phoneNumber,
        },
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
export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    logOut: (state) => {
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
export const { logOut } = signupSlice.actions;
export default signupSlice.reducer;
