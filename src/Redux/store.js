import { configureStore } from "@reduxjs/toolkit";
import Authslice from "./Authslice";
import Postslice from "./Postslice";

const store = configureStore({
  reducer: {
    auth: Authslice.reducer,
    post: Postslice.reducer,
  },
});
export default store;
