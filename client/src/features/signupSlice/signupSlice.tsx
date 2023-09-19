import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface signUpInputs {
  id: string;
  password: string;
  name: string;
  email: string;
  nickName: string;
  birthDay: string;
  birthDayBefore: Date;
  phoneNumber: string;
}
interface initialStateType {
  first: {
    id: { idContent: string | null; confirmed: boolean };
    email: {
      emailContent: string | null;
      confirmed: boolean;
      code: string | null;
      loading: boolean;
    };
  };
  second: { id: string | null };
  third: null;
}
const initialState: initialStateType = {
  first: {
    id: { idContent: null, confirmed: false },
    email: { emailContent: null, confirmed: false, code: null, loading: false },
  },
  second: { id: "testtest" },
  third: null,
};
export const emailCheckAsync = createAsyncThunk<string, string>(
  "emailCheckAsync",
  async (email, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        url: "http://3.39.37.48:8080/api/v1/users/basic/signUp/step1/checkEmail",
        method: "post",
        data: {
          mail: email,
        },
      });
      console.log(data);
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
export const idCheckAsync = createAsyncThunk<boolean, string>(
  "idCheckAsync",
  async (id, { getState, rejectWithValue }) => {
    const { signup } = getState() as { signup: initialStateType };
    console.log(signup);
    try {
      const { data } = await axios({
        url: "http://3.39.37.48:8080/api/v1/users/basic/signUp/step1/checkId",
        method: "post",
        data: {
          id: id,
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
export const signupAsync = createAsyncThunk<
  { data: string; id: string },
  signUpInputs
>("signupAsync", async (signupData, { rejectWithValue }) => {
  try {
    const { data } = await axios({
      url: "http://3.39.37.48:8080/api/v1/users/basic/signUp/step1",
      method: "post",
      data: {
        id: signupData.id,
        pwd: signupData.password,
        name: signupData.name,
        email: signupData.email,
        nickName: signupData.nickName,
        birthDay: signupData.birthDay,
        phoneNumber: signupData.phoneNumber,
      },
    });
    console.log(data);
    return { data: data, id: signupData.id };
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.log(e);
      console.log(e.response);
      throw e.response;
    }
    return rejectWithValue("No user found");
  }
});
export const signupSecondAsync = createAsyncThunk<string, FormData>(
  "signupSecondAsync",
  async (SecondData, { rejectWithValue }) => {
    console.log(SecondData);
    try {
      const { data } = await axios({
        url: "http://3.39.37.48:8080/api/v1/users/basic/signUp/step2",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        method: "post",
        data: SecondData,
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
export const familySignupAsync = createAsyncThunk<object, FormData>(
  "familySignupAsync",
  async (familyData, { rejectWithValue }) => {
    try {
      const data = await axios({
        url: "http://3.39.37.48:8080/api/v1/family/createFamily/detail",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        method: "post",
        data: familyData,
      });
      console.log(data);
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
    updateIdContent: (state, action: PayloadAction<string>) => {
      state.first.id.idContent = action.payload;
    },
    updateEmailContent: (state, action: PayloadAction<string>) => {
      state.first.email.emailContent = action.payload;
    },
    deleteEmailCotnet: (state) => {
      state.first.email.emailContent = null;
    },
    compareEmail: (state, action: PayloadAction<string>) => {
      if (state.first.email.code === action.payload) {
        state.first.email.confirmed = true;
        alert("인증완료");
      } else {
        state.first.email.confirmed = false;
        alert("코드가 올바르지 않습니다");
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signupAsync.fulfilled, (state, { payload }) => {
      state.second.id = payload.id;
      console.log(payload);
    });
    builder.addCase(signupAsync.rejected, (state, payload) => {
      console.log(payload);
    });
    builder.addCase(idCheckAsync.pending, (state) => {
      state.first.id.confirmed = false;
    });
    builder.addCase(idCheckAsync.fulfilled, (state, { payload }) => {
      state.first.id.confirmed = payload;
      console.log(state.first.id.confirmed);
    });
    builder.addCase(emailCheckAsync.pending, (state) => {
      state.first.email.loading = true;
      state.first.email.confirmed = false;
      state.first.email.code = null;
      console.log(state.first.email.loading);
    });
    builder.addCase(emailCheckAsync.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.first.email.code = payload;
      state.first.email.loading = false;
      console.log(state.first.email.code);
    });

    builder.addCase(emailCheckAsync.rejected, (state, payload) => {
      state.first.email.loading = false;
      console.log(payload);
    });
    builder.addCase(signupSecondAsync.fulfilled, (state, { payload }) => {
      console.log(payload);
    });
  },
});
export const {
  compareEmail,
  updateIdContent,
  updateEmailContent,
  deleteEmailCotnet,
} = signupSlice.actions;
export default signupSlice.reducer;
