export interface ITask {
  id: number
  usersIds: number[]
  title: string
  status: 'completed' | 'awaiting' | 'not_completed'
  description: string
  responsible: string
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
  image: string
}

export interface INewspaper {
  id: number
  title: string
  description: string
  date: string
}

export const news: INewspaper[] = [
  {
    id: 0,
    title: 'Название новости 1',
    description: 'Крутое название новости актуально 27/4 поучительно очень',
    date: '23.05.2023'
  },
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
    title: 'Название новости 5',
    description: 'Крутое название новости актуально 27/4 поучительно очень',
    date: '23.05.2023'
  },
  {
    id: 4,
    title: 'Название новости 1',
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
  }
]

export const tasks: ITask[] = [
  {
    id: 0,
    usersIds: [0, 1],
    title: 'Починить станок',
    status: 'completed',
    description: 'Срочно починить станок',
    responsible: 'Карлуша В.Ю.'
  },
  {
    id: 1,
    usersIds: [0, 1],
    title: 'Починить станок',
    status: 'completed',
    description: 'Срочно починить станок',
    responsible: 'Карлуша В.Ю.'
  },
  {
    id: 2,
    usersIds: [0, 1],
    title: 'Починить станок',
    status: 'completed',
    description: 'Срочно починить станок',
    responsible: 'Зубенко М.П.'
  },
  {
    id: 3,
    usersIds: [0, 1],
    title: 'Починить станок',
    status: 'completed',
    description: 'Срочно починить станок',
    responsible: 'Зубенко М.П.'
  },
  {
    id: 4,
    usersIds: [0, 1],
    title: 'Починить станок',
    status: 'completed',
    description: 'Срочно починить станок',
    responsible: 'Карлуша В.Ю.'
  },
  {
    id: 5,
    usersIds: [0, 1],
    title: 'Починить станок',
    status: 'completed',
    description: 'Срочно починить станок',
    responsible: 'Зубенко М.П.'
  },
  {
    id: 6,
    usersIds: [0, 1],
    title: 'Починить станок',
    status: 'completed',
    description: 'Срочно починить станок',
    responsible: 'Зубенко М.П.'
  }
]

export const users: ICompanyUser[] = [
  {
    id: 0,
    fio: 'Зубенко М.П.',
    image:
      'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg',
    gender: 'male',
    birthdate: '18.05.2003',
    city: 'Москва',
    job: 'Кассир',
    started: '10.01.2022',
    phone: '+79780402522'
  },
  {
    id: 1,
    fio: 'Карлуша В.Ю.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/800px-Pierre-Person.jpg',
    gender: 'male',
    birthdate: '18.05.2003',
    city: 'Краснодар',
    job: 'Склад',
    started: '10.01.2022',
    phone: '+79780402523'
  }
]
