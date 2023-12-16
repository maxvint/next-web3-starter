import { createAction } from '@reduxjs/toolkit'
import { UserAuthPayload, UserInitPayload } from './reducer'


export const updateUserInitial = createAction<UserInitPayload>('user/updateUserInitial')
export const updateUserLogin = createAction<UserAuthPayload>('user/updateUserLogin')
export const updateUserLogout = createAction('user/updateUserLogout')
