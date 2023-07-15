import { createSlice } from '@reduxjs/toolkit';
export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    favouriteItems: [],
  },
  //always use = to update in reducers
  reducers: {
    addToFavourites: (state, action) => {
      state.favouriteItems.push(action.payload);
    },
    removeFromFavourites: (state, action) => {
      console.log(action.payload);
      state.favouriteItems = state.favouriteItems.filter(
        (item) => item !== action.payload
      );
    },
  },
});

export const { addToFavourites, removeFromFavourites } =
  favouritesSlice.actions;
export default favouritesSlice.reducer;
