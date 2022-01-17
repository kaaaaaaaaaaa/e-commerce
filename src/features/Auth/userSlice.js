import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';

// create async action ==> create the thunk
export const register = createAsyncThunk('users/register', async(payload) => {
    // call api to register
    const data = await userApi.register(payload);

    // save data to local storage
    localStorage.setItem('access_token', data.jwt);
    localStorage.setItem('user', JSON.stringify(data.user));

    // return user data
    return data.user;
});
const userSlice = createSlice({
    name: 'counter',
    initialState: {
        current: {},
        settings: {},
    },
    //reducer
    reducers: {
        //sync action
    },
    //extraReducers
    extraReducers: {
        //handlle case register fullfilled
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
    },
});

const { reducer, actions } = userSlice;
//export reducer
export default reducer;
//export actions
// export const { increase, decrease } = actions;