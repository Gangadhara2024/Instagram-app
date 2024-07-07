import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: {
    apiStatus: "init",
    data: [],
  },
  userInfo: {
    apiStatus: "init",
    data: null,
  },
  createAPIStatus: "init",
};
const Postslice = createSlice({
  name: "POST",
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
    updatePostStatus: (state, action) => {
      state.createAPIStatus = action.payload;
    },

    AddPost: (state, action) => {
      state.posts.data.unshift(action.payload);
      const postCount = state.userInfo.data.posts;
      if (state.userInfo.data.posts) {
        state.userInfo.data.posts = postCount + 1;
      }
    },
  },
});
export const { updateUserInfo, updatePostInfo, AddPost, updatePostStatus } =
  Postslice.actions;
export default Postslice;
