// set up store

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlice";
//all reducer
const rootReducer = {
    counter: counterReducer, //reducer of counter
};
const store = configureStore({
    reducer: rootReducer,
});

export default store;