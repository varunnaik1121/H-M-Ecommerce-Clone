import { createSlice } from '@reduxjs/toolkit';
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isSearchOpen: false,
  },

  reducers: {
    openSearch: (state) => {
      state.isSearchOpen = true;
    },
    closeSearch: (state) => {
      state.isSearchOpen = false;
    },
  },
});

export const { openSearch, closeSearch } = userSlice.actions;
export default userSlice.reducer;
