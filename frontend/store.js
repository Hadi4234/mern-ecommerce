import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import { apiSlice } from "./src/slices/apiSlice";
import cartSliceReducer from "./src/slices/cartSlice";
import authSliceReducer from "./src/slices/authSlice";

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartSliceReducer,
        auth: authSliceReducer,
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})

export default store; 