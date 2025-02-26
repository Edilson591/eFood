import { configureStore } from "@reduxjs/toolkit";
import restaurantesApi from "../../services/apiRestaurantes";
import carrrinhoSlice from './reducers/carrinho'
import { setupListeners } from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer: {
        carrinho: carrrinhoSlice,
        [restaurantesApi.reducerPath]: restaurantesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(restaurantesApi.middleware)
})

setupListeners(store.dispatch)


export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;