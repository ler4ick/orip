import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { type RootState } from '../store'
import { type ICompanyUser, type ITask, tasks, users } from '../appConfig'

export interface IUser {
  fullName: string
  login: string
  password: string
  role: string
  company: string
  position: string
}

interface AuthState {
  error: string | null
  users: IUser[]
  success: boolean
  loggedIn: boolean
  tasks: ITask[]
  companyUsers: ICompanyUser[]
  currentTaskID: number
  currentUserID: number
}

const initialState: AuthState = {
  users: [],
  error: null,
  success: false,
  loggedIn: false,
  tasks,
  companyUsers: users,
  currentTaskID: tasks.length,
  currentUserID: users.length
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
})

export const actions = authSlice.actions

export const selectError = (state: RootState): string | null => state.auth.error
export const selectIsSuccess = (state: RootState): boolean => state.auth.success
export const selectUsers = (state: RootState): IUser[] => state.auth.users
export const selectIsLogged = (state: RootState): boolean => state.auth.loggedIn

export const selectCompanyUsers = (state: RootState): ICompanyUser[] =>
  state.auth.companyUsers

export const selectTasks = (state: RootState): ITask[] => state.auth.tasks

export default authSlice.reducer
