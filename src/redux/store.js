import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import searchReducer from './searchFilterSlice';
export default configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
  },
});
