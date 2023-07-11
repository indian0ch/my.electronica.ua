import { configureStore, combineReducers } from "@reduxjs/toolkit";
import colorChooseReducer from "./colorChoose-slice";
import cartReducer from "./cart-slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  colorChoosen: colorChooseReducer,
  cartFunctional: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
export default store;
