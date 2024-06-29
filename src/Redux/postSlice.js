import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: {
    apiStatus: "init",
    data: null,
  },
  userInfo: {
    apiStatus: "init",
    data: null,
  },
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      const { apiStatus, data } = action.payload;
      if (apiStatus === "success") {
        state.userInfo.data = data;
      }
      state.userInfo.apiStatus = apiStatus;
    },

    updatePostInfo: (state, action) => {
      const { apiStatus, data } = action.payload;
      if (apiStatus === "success") {
        state.posts.data = data;
      }
      state.posts.apiStatus = apiStatus;
    },
  },
});
export const { updateUserInfo, updatePostInfo} = postSlice.actions;
export default postSlice;
