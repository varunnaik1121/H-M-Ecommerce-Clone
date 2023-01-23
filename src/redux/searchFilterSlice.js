import { createSlice } from '@reduxjs/toolkit';
export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    userSelectedSortByValue: 'recommmended',
    userSelectedFilters: [],
  },

  reducers: {
    updateUserSelectedFilters: (state, action) => {
      state.userSelectedFilters.push(action.payload);
    },
    updateSelectedSortByValue: (state, action) => {
      state.userSelectedSortByValue = action.payload;
    },
    removeSelectedFilter: (state, action) => {
      // state.userSelectedFilters.pop(action.payload);
      console.log(action.payload);
      const filtered = state.userSelectedFilters.filter(
        (val) => JSON.stringify(val) !== JSON.stringify(action.payload)
      );
      state.userSelectedFilters = filtered;
    },
  },
});

export const {
  updateSelectedSortByValue,
  updateUserSelectedFilters,
  removeSelectedFilter,
} = searchSlice.actions;
export default searchSlice.reducer;
