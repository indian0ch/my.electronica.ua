import { configureStore } from "@reduxjs/toolkit";
import colorChooseReducer from "./colorChoose-slice";

const store = configureStore({
  reducer: { colorChoosen: colorChooseReducer },
});

export default store;
