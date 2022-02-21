import { createSelector } from '@reduxjs/toolkit'

export const cartItemsSlector = (state) => state.cart.cartItems; // get data from redux ====>> rootReducer -> cart -> cartItems



// count the number of product in cart
export const cartItemsCountSlector = createSelector(cartItemsSlector, (cartItems) => cartItems.reduce((count, item) => count + item.quantity, 0));
// caculate total of products
export const cartItemsTotalSlector = createSelector(cartItemsSlector, (cartItems) => cartItems.reduce((total, item) => total + item.product.salePrice, 0));