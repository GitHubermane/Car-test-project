import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { CarsReducer } from "./Slice/CarsSlice";

const rootReducer = combineReducers({
    Cars: CarsReducer
})

const createStore = () => configureStore({
    reducer: rootReducer
})

export const wrapper = createWrapper(createStore)