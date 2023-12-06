import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [], // Initial state
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const foundIndex = state.cartItems.findIndex(item => item.id === newItem.id); // Find the index of the item in the cart

      // If the item already exists in the cart, increment the totalItems and totalPrice
      // Otherwise, add the item to the cart
      if (foundIndex !== -1) {
        state.cartItems[foundIndex].totalItems += 1;
        state.cartItems[foundIndex].totalPrice = state.cartItems[foundIndex].totalItems * newItem.price;
      } else {
        state.cartItems.push({
          ...newItem,
          totalItems: 1,
          totalPrice: newItem.price,
        });
      }
    },
    removeFromCart: (state, action) => {
      const itemToRemove = action.payload;
      const foundIndex = state.cartItems.findIndex(item => item.id === itemToRemove.id); // Find the index of the item in the cart

      // If the item's totalItems is greater than 1, decrement the totalItems and totalPrice
      // Otherwise, remove the item from the cart
      if (foundIndex !== -1) {
        if (state.cartItems[foundIndex].totalItems > 1) {
          state.cartItems[foundIndex].totalItems -= 1;
          state.cartItems[foundIndex].totalPrice = state.cartItems[foundIndex].totalItems * state.cartItems[foundIndex].price;
        } else {
          state.cartItems.splice(foundIndex, 1);
        }
      }
    },
    clearCart: (state) => {
      // Clear the cart by resetting cartItems to an empty array
      state.cartItems = [];
    },
  },
});

// Action creators generated for each case reducer function
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// Export the generated reducer
const cartReducer = cartSlice.reducer;
export default cartReducer;

// Selectors
export const selectCartItems = state => state.cart.cartItems;
export const selectCartTotalItems = state => state.cart.cartItems.reduce((total, item) => total + item.totalItems, 0);
export const selectCartTotalPrices = state => state.cart.cartItems.reduce((total, item) => total + item.totalPrice, 0);
