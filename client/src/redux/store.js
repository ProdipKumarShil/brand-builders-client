import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import { brandApi } from "./api/api";


export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [brandApi.reducerPath]: brandApi.reducer
  },

  // middleware
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(brandApi.middleware)
})