import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
  status: string;
}
const initialState: initialStateType = {
  status: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    edit: (state) => {
      state.status = "edit";
    },
    editDone: (state) => {
      state.status = "";
    },
  },
  extraReducers: () => {},
});

export const { edit, editDone } = userSlice.actions;
export default userSlice.reducer;
