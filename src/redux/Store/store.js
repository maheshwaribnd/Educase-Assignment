import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../Reducers/slice';

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;