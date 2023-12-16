import { createContext, useContext } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../index'

export const useIsAuthenticated = (): boolean => {
  return useSelector((state: AppState) => state.auth.isAuthenticated || false)
}