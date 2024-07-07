import { createSlice } from "@reduxjs/toolkit";

export const TabKeys = {
  FOLLOWERS: "FOLLOWERS",
  FOLLOWING: "FOLLOWING",
  SUGGESTIONS: "SUGGESTIONS",
};
const Userslice = createSlice({
  name: "USERS",
  initialState: {
    [TabKeys.FOLLOWERS]: {
      apiStatus: "init",
      list: [],
    },
    [TabKeys.FOLLOWING]: {
      apiStatus: "init",
      list: [],
    },
    [TabKeys.SUGGESTIONS]: {
      apiStatus: "init",
      list: [],
    },
    actions: {},
  },
  reducers: {
    updateTabKey: (state, action) => {
      const { tabId, apiStatus, data } = action.payload;
      if (apiStatus === "success") {
        state[tabId].list = data;
      }
      state[tabId].apiStatus = apiStatus;
    },
    updateActionStatus: (state, action) => {
      const { apiStatus, userId } = action.payload;
      state.actions[userId] = apiStatus;
    },
  },
});
export const { updateTabKey, updateActionStatus } = Userslice.actions;
export default Userslice;
