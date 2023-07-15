import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import searchReducer from './searchFilterSlice';
import favouritesSlice from './favouritesSlice';
export default configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
    favourites: favouritesSlice,
  },
});
