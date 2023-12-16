import { configureStore } from '@reduxjs/toolkit'

import auth from './auth/reducer'
// import { updateVersion } from './user/actions'

// const PERSISTED_KEYS: string[] = ['user', 'wallet']

const store = configureStore({
  reducer: {
    auth,
  },
  // middleware: [...getDefaultMiddleware(), save({ states: PERSISTED_KEYS })],
  // preloadedState: load({ states: PERSISTED_KEYS })
})

// store.dispatch(updateVersion())

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
