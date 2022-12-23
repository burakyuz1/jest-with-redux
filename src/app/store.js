import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/users/userSlice';

export default configureStore({
  reducer: {
    userSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})