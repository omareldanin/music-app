import { configureStore } from "@reduxjs/toolkit";
import songsSlice from "./songsSlice";
const store = configureStore({
  reducer: {
    song: songsSlice.reducer,
  },
});
export default store;
