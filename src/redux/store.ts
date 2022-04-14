import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { localizationReducer } from "./localization/redux";
import { mobileMenuReducer } from "./mobile-menu/redux";


const reducer = combineReducers({
    localization: localizationReducer,
    mobileMenu: mobileMenuReducer
})


export const store = configureStore({
    reducer: reducer
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;