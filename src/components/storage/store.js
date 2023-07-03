import { configureStore } from "@reduxjs/toolkit";
import colorChooseReducer from "./colorChoose-slice";
import cartReducer from "./cart-slice";

const store = configureStore({
  reducer: { colorChoosen: colorChooseReducer, cartFunctional:cartReducer },
});

export default store;
