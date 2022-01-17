// set up store

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Counter/counterSlice';
import userReducer from '../features/Auth/userSlice';
//all reducer
const rootReducer = {
    counter: counterReducer,
    user: userReducer, //reducer of counter
};
const store = configureStore({
    reducer: rootReducer,
});

export default store;