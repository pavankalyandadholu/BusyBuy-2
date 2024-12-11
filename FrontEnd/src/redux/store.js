import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { productsReducer } from "./reducers/productsReducer";
import { cartReducer } from "./reducers/cartReducer";
export const store= configureStore({
   reducer:{
    userReducer,productsReducer,cartReducer
   }
});
