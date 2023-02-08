import { createSlice } from '@reduxjs/toolkit';
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isSearchOpen: false,
    isSidebarFilterOpen: false,
  },

  reducers: {
    openSearch: (state) => {
      state.isSearchOpen = true;
    },
    closeSearch: (state) => {
      state.isSearchOpen = false;
    },
    openSidebarFilter: (state) => {
      state.isSidebarFilterOpen = true;
    },
    closeSidebarFilter: (state) => {
      state.isSidebarFilterOpen = false;
    },
  },
});

export const {
  openSearch,
  closeSearch,
  openSidebarFilter,
  closeSidebarFilter,
  isSidebarFilterOpen,
} = userSlice.actions;
export default userSlice.reducer;
