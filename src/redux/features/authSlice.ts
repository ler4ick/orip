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
  task: ITask | null
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
  currentUserID: users.length,
  task: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getTask: (state: AuthState, action) => {
      const task = state.tasks.filter((task) => task.id !== action.payload)
      console.log(task)

      return { ...state, task: task[0] }
    }
  }
})

export const { getTask } = authSlice.actions

export const selectError = (state: RootState): string | null => state.auth.error
export const selectIsSuccess = (state: RootState): boolean => state.auth.success
export const selectUsers = (state: RootState): IUser[] => state.auth.users
export const selectIsLogged = (state: RootState): boolean => state.auth.loggedIn

export const selectCompanyUsers = (state: RootState): ICompanyUser[] =>
  state.auth.companyUsers

export const selectTasks = (state: RootState): ITask[] => state.auth.tasks
export const selectTask = (state: RootState): ITask | null => state.auth.task

export default authSlice.reducer
