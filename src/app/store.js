import { configureStore } from "@reduxjs/toolkit";
import { productListApi } from "./services/productList";
import cartReducer from "../features/cart/cartSlice";

export default configureStore({
  // Adding the reducer list to the store
  reducer: {
    [productListApi.reducerPath]: productListApi.reducer,
    cart: cartReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productListApi.middleware),
});
