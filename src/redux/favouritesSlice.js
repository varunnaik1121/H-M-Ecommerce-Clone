import { createSlice } from '@reduxjs/toolkit';
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    favouriteItems: [],
  },

  reducers: {
    addToFavourites: (state, action) => {
      state.cartItems.push(action.payload.id);
    },
    removeFromFavourites: (state, action) => {
      state.cartItems.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToFavourites, removeFromFavourites } = cartSlice.actions;
export default cartSlice.reducer;
