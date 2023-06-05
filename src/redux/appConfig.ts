export interface ITask {
  id: number
  usersIds: number[]
  title: string
  status: 'completed' | 'awaiting' | 'not_completed'
  description: string
  responsible: string[]
}

export interface ICompanyUser {
  id: number
  fio: string
  gender: 'female' | 'male'
  birthdate: string
  city: string
  job: string
  started: string
  phone: string
}

export interface INewspaper {
  id: number
  title: string
  description: string
  date: string
}

export const news: INewspaper[] = [
  {
    id: 1,
    title: 'Название новости 1',
    description: 'Крутое название новости актуально 27/4 поучительно очень',
    date: '23.05.2023'
  },
  {
    id: 2,
    title: 'Название новости 1',
    description: 'Крутое название новости актуально 27/4 поучительно очень',
    date: '23.05.2023'
  },
  {
    id: 3,
    title: 'Название новости 1',
    description: 'Крутое название новости актуально 27/4 поучительно очень',
    date: '23.05.2023'
  },
  {
    id: 4,
    title: 'Название новости 5',
    description: 'Крутое название новости актуально 27/4 поучительно очень',
    date: '23.05.2023'
  },
  {
    id: 5,
    title: 'Название новости 1',
    description: 'Крутое название новости актуально 27/4 поучительно очень',
    date: '23.05.2023'
  },
  {
    id: 6,
    title: 'Название новости 1',
    description: 'Крутое название новости актуально 27/4 поучительно очень',
    date: '23.05.2023'
  },
  {
    id: 7,
    title: 'Название новости 1',
    description: 'Крутое название новости актуально 27/4 поучительно очень',
    date: '23.05.2023'
  }
]

export const tasks: ITask[] = [
  {
    id: 1,
    usersIds: [1, 2],
    title: 'Починить станок',
    status: 'completed',
    description: 'Срочно починить станок',
    responsible: ['Зубенко М.П.', 'Карлуша В.Ю.']
  },
  {
    id: 2,
    usersIds: [1, 2],
    title: 'Починить станок',
    status: 'completed',
    description: 'Срочно починить станок',
    responsible: ['Зубенко М.П.', 'Карлуша В.Ю.']
  },
  {
    id: 3,
    usersIds: [1, 2],
    title: 'Починить станок',
    status: 'completed',
    description: 'Срочно починить станок',
    responsible: ['Зубенко М.П.', 'Карлуша В.Ю.']
  },
  {
    id: 4,
    usersIds: [1, 2],
    title: 'Починить станок',
    status: 'completed',
    description: 'Срочно починить станок',
    responsible: ['Зубенко М.П.', 'Карлуша В.Ю.']
  },
  {
    id: 5,
    usersIds: [1, 2],
    title: 'Починить станок',
    status: 'completed',
    description: 'Срочно починить станок',
    responsible: ['Зубенко М.П.', 'Карлуша В.Ю.']
  },
  {
    id: 6,
    usersIds: [1, 2],
    title: 'Починить станок',
    status: 'completed',
    description: 'Срочно починить станок',
    responsible: ['Зубенко М.П.', 'Карлуша В.Ю.']
  },
  {
    id: 7,
    usersIds: [1, 2],
    title: 'Починить станок',
    status: 'completed',
    description: 'Срочно починить станок',
    responsible: ['Зубенко М.П.', 'Карлуша В.Ю.']
  }
]

export const users: ICompanyUser[] = []
