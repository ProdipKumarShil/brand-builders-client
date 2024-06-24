import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import { todoApi } from "./api/api";


export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [todoApi.reducerPath]: todoApi.reducer
  },

  // middleware
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(todoApi.middleware)
})