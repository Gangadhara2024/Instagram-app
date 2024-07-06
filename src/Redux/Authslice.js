import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: Boolean(localStorage.getItem("token")),
};

const Authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAuthStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});
export const { updateAuthStatus } = Authslice.actions;
export default Authslice;
