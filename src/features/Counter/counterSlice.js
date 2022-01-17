import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increase(state, action) {
            return state + 1;
        },
        decrease(state, action) {
            return state - 1;
        },
    },
});

const { reducer, actions } = counterSlice;
//export reducer
export default reducer;
//export actions
export const { increase, decrease } = actions;