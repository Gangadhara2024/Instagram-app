import { configureStore } from "@reduxjs/toolkit";
import Authslice from "./Authslice";
import Postslice from "./Postslice";
import Userslice from "../Redux2/Userslice";

const store = configureStore({
  reducer: {
    AUTH: Authslice.reducer,
    POST: Postslice.reducer,
    USERS: Userslice.reducer,
  },
});
export default store;
