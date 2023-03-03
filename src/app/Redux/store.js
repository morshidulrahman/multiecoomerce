import { configureStore } from "@reduxjs/toolkit";
import slices from "./slices/cartSlice";
export const store = configureStore({
  reducer: {
    cart: slices,
  },
});
