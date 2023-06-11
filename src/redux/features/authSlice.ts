import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type RootState } from '../store'
import { type ICompanyUser, type ITask, tasks, users, news } from '../appConfig'
import { type INewsItem } from '../../components/NewsItem/NewsItem'

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
  users: ICompanyUser[]
  success: boolean
  loggedIn: boolean
  tasks: ITask[]
  task: ITask | null
  companyUsers: ICompanyUser[]
  user: ICompanyUser | null
  currentTaskID: number
  currentUserID: number
  news: INewsItem[]
  newsItem: INewsItem | null
}

const initialState: AuthState = {
  users,
  error: null,
  success: false,
  loggedIn: false,
  tasks,
  companyUsers: users,
  currentTaskID: tasks.length,
  currentUserID: users.length,
  task: null,
  user: null,
  news,
  newsItem: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getTask: (state: AuthState, action) => {
      const task = state.tasks.filter((task) => task.id === action.payload)

      return { ...state, task: task[0] }
    },
    getUser: (state: AuthState, action) => {
      const user = state.companyUsers.filter(
        (user) => user.id === action.payload
      )

      return {
        ...state,
        user: user[0]
      }
    },
    deleteNews: (state, action) => {
      const newNews = state.news.filter((item) => item.id !== action.payload)
      return {
        ...state,
        news: newNews
      }
    },
    editNews: (state, action) => {
      const newNews: INewsItem[] = []
      state.news.forEach((item) => {
        if (item.id === action.payload.id) {
          item = action.payload
        }
        newNews.push(item)
      })

      return {
        ...state,
        news: newNews
      }
    },
    createNews: (state, action) => {
      state.news.push({ ...action.payload, id: state.news.length })
    },

    createUser: (state, action) => {
      state.companyUsers.push({
        ...action.payload,
        id: state.companyUsers.length
      })
    },
    editUser: (state, action) => {
      const newUsers: ICompanyUser[] = []
      state.companyUsers.forEach((user) => {
        if (user.id === action.payload.id) {
          user = action.payload
        }
        newUsers.push(user)
      })

      return {
        ...state,
        companyUsers: newUsers
      }
    },
    deleteUser: (state, action: PayloadAction<number | undefined>) => {
      const newUsers = state.companyUsers.filter(
        (user) => user.id !== action.payload
      )
      return {
        ...state,
        companyUsers: newUsers
      }
    },

    createTask: (state, action) => {
      state.tasks.push({
        ...action.payload,
        id: state.tasks.length
      })
    },

    editTask: (state, action) => {
      const newTasks: ITask[] = []
      state.tasks.forEach((task) => {
        if (task.id === action.payload.id) {
          task = action.payload
        }
        newTasks.push(task)
      })

      return {
        ...state,
        tasks: newTasks
      }
    },

    deleteTask: (state, action) => {
      const newTasks = state.tasks.filter((task) => task.id !== action.payload)
      return {
        ...state,
        tasks: newTasks
      }
    }
  }
})

export const {
  getTask,
  getUser,
  deleteNews,
  editNews,
  createNews,
  createUser,
  deleteUser,
  editUser,
  createTask,
  deleteTask,
  editTask
} = authSlice.actions

export const selectError = (state: RootState): string | null => state.auth.error
export const selectIsSuccess = (state: RootState): boolean => state.auth.success
export const selectUsers = (state: RootState): ICompanyUser[] =>
  state.auth.users
export const selectIsLogged = (state: RootState): boolean => state.auth.loggedIn

export const selectCompanyUsers = (state: RootState): ICompanyUser[] =>
  state.auth.companyUsers
export const selectCompanyUser = (state: RootState): ICompanyUser | null =>
  state.auth.user

export const selectTasks = (state: RootState): ITask[] => state.auth.tasks
export const selectTask = (state: RootState): ITask | null => state.auth.task

export const selectNews = (state: RootState): INewsItem[] | null =>
  state.auth.news
export const selectNewsItem = (state: RootState): INewsItem | null =>
  state.auth.newsItem

export default authSlice.reducer
