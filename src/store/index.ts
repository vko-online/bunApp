import { configureStore } from '@reduxjs/toolkit'
// import { api } from './api'
import filterReducer from './slices/filter'
// ...

export const store = configureStore({
  reducer: {
    filter: filterReducer
  }
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
