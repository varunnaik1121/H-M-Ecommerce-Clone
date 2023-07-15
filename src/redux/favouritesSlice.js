import { createSlice } from '@reduxjs/toolkit';
export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    favouriteItems: [],
  },

  reducers: {
    addToFavourites: (state, action) => {
      state.favouriteItems.push(action.payload);
    },
    removeFromFavourites: (state, action) => {
      state.favouriteItems.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToFavourites, removeFromFavourites } =
  favouritesSlice.actions;
export default favouritesSlice.reducer;
