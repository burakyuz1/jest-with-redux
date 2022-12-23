import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/users/userSlice';


// const rootReducer = combineReducers({
//   user: userReducer
// })

// export function setupStore(preloadedState) {
//   return configureStore({
//     reducer: rootReducer,
//     preloadedState
//   })
// }

export default configureStore({
  reducer: {
    userSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})