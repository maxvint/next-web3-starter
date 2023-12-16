import { createReducer } from '@reduxjs/toolkit'
import { updateUserInitial, updateUserLogin, updateUserLogout } from './actions'

export type AuthUserType = null | {
  tokenID: string
  balance: number
  frozenToken: number
  status: number
  createTime: number
  updateTime: number
}

export type UserAuthPayload = {
  isAuthenticated: boolean
  user: AuthUserType
}

export type UserInitPayload = {
  isAuthenticated: boolean
  user: AuthUserType
}

export type AuthStateType = {
  isAuthenticated: boolean
  isInitialized: boolean
  user: AuthUserType
}

export const initialState: AuthStateType = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
}

export default createReducer(initialState, builder =>
  builder
    .addCase(updateUserInitial, (state, { payload: { isAuthenticated, user } }) => {
      return {
        isInitialized: true,
        isAuthenticated,
        user,
      }
    })
    .addCase(updateUserLogin, (state, { payload: { user } }) => {
      return {
        ...state,
        isAuthenticated: true,
        user,
      }
    })
    .addCase(updateUserLogout, (state) => {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      }
    })
)
