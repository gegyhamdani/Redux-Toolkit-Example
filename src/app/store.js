import { configureStore } from "@reduxjs/toolkit";
import { productListApi } from "./services/productList";
import cartReducer from "../features/cart/cartSlice";

export default configureStore({
  reducer: {
    [productListApi.reducerPath]: productListApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productListApi.middleware),
});
