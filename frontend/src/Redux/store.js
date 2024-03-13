import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlide";
import getReducer from "./getSlide";
import postReducer from "./postSlide";
import putReducer from "./putSlide";
import putProductImgReducer from "./putProductImgSlice";
import putProductSizeReducer from "./putProductSizeSlice";
import getProductImgProductReducer from "./getImgProductSlide";
import getSubpageReducer from "./subpageSlide";
import addTocartReducer from "./addToCartSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  get: getReducer,
  post: postReducer,
  put: putReducer,
  putImg: putProductImgReducer,
  putSize: putProductSizeReducer,
  getImgProduct: getProductImgProductReducer,
  getSubpage: getSubpageReducer,
  addTocart: addTocartReducer,
});
const noSaveRootReduces = combineReducers({
  post: postReducer,
  put: putReducer,
  putImg: putProductImgReducer,
  putSize: putProductSizeReducer,
});
const saveReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: { noSaveRootReduces, saveReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
