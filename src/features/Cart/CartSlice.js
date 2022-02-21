import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart: false,
        cartItems: [], //
    },
    reducers: {
        showMiniCart(state) {
            return state.showMiniCart = true
        },
        hideMiniCart(state) {
            return state.showMiniCart = false
        },
        addToCart(state, action) {
            const newItem = action.payload;
            const index = state.cartItems.findIndex(item => item.id === newItem.id);
            if (index >= 0) {
                state.cartItems[index].quantity += newItem.quantity;

            } else {
                state.cartItems.push(newItem);
            }
        },
        setQuantity(state, action) {
            const { id, quantity } = action.payload
            const index = state.cartItems.findIndex(item => item.id === id)
            if (index >= 0) {
                state.cartItems[index].quantity = quantity
            }

        },
        removeFromCart(state, action) {
            const removedId = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== removedId)
        }

    },
});

const { reducer, actions } = cartSlice;
//export reducer
export default reducer;
//export actions
export const { showMiniCart, hideMiniCart, addToCart, removeFromCart, setQuantity } = actions;