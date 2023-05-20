export interface ITask {
  id: number
  userID: number
  title: string
  time: string
  status: string
}

export interface ICompanyUser {
  id: number
  fio: string
  name: string
  date: string
  tasks: ITask[]
}

export const tasks: ITask[] = [
  {
    id: 1,
    userID: 1,
    title: 'Почистить станок',
    time: '30 minutes',
    status: 'in proggress'
  },
  {
    id: 2,
    userID: 1,
    title: 'Почистить крышу',
    time: '1 hour',
    status: 'completed'
  },
  {
    id: 3,
    userID: 1,
    title: 'Почистить зубы',
    time: '30 minutes',
    status: 'to do'
  },
  {
    id: 4,
    userID: 1,
    title: 'Почистить штаны',
    time: '30 minutes',
    status: 'to do'
  },
  {
    id: 5,
    userID: 1,
    title: 'Почистить кастрюли',
    time: '30 minutes',
    status: 'to do'
  },
  {
    id: 6,
    userID: 2,
    title: 'Почистить станок',
    time: '30 minutes',
    status: 'in proggress'
  },
  {
    id: 7,
    userID: 2,
    title: 'Почистить крышу',
    time: '1 hour',
    status: 'completed'
  },
  {
    id: 8,
    userID: 2,
    title: 'Почистить зубы',
    time: '30 minutes',
    status: 'to do'
  },
  {
    id: 9,
    userID: 2,
    title: 'Почистить штаны',
    time: '30 minutes',
    status: 'to do'
  },
  {
    id: 10,
    userID: 2,
    title: 'Почистить кастрюли',
    time: '30 minutes',
    status: 'to do'
  },
  {
    id: 11,
    userID: 3,
    title: 'Почистить станок',
    time: '30 minutes',
    status: 'in proggress'
  },
  {
    id: 12,
    userID: 3,
    title: 'Почистить крышу',
    time: '1 hour',
    status: 'completed'
  },
  {
    id: 13,
    userID: 3,
    title: 'Почистить зубы',
    time: '30 minutes',
    status: 'to do'
  },
  {
    id: 14,
    userID: 3,
    title: 'Почистить штаны',
    time: '30 minutes',
    status: 'to do'
  },
  {
    id: 15,
    userID: 3,
    title: 'Почистить кастрюли',
    time: '30 minutes',
    status: 'to do'
  },
  {
    id: 16,
    userID: 4,
    title: 'Почистить станок',
    time: '30 minutes',
    status: 'in proggress'
  },
  {
    id: 17,
    userID: 4,
    title: 'Почистить крышу',
    time: '1 hour',
    status: 'completed'
  },
  {
    id: 18,
    userID: 4,
    title: 'Почистить зубы',
    time: '30 minutes',
    status: 'to do'
  },
  {
    id: 19,
    userID: 4,
    title: 'Почистить штаны',
    time: '30 minutes',
    status: 'to do'
  },
  {
    id: 20,
    userID: 4,
    title: 'Почистить кастрюли',
    time: '30 minutes',
    status: 'to do'
  }
]

export const users: ICompanyUser[] = [
  {
    id: 1,
    fio: 'Лысенко Игорь Дмитриевич',
    name: 'Igor',
    date: '18.05.2003',
    tasks: tasks.filter((task) => task.userID === 1)
  },
  {
    id: 2,
    fio: 'Скопин Валентин Викторович',
    name: 'Valya',
    date: '22.06.2003',
    tasks: tasks.filter((task) => task.userID === 2)
  },
  {
    id: 3,
    fio: 'Галенин Артем Константинович',
    name: 'Artem',
    date: '27.02.2003',
    tasks: tasks.filter((task) => task.userID === 3)
  },
  {
    id: 4,
    name: 'Sasha',
    fio: 'Орлов Александр Леонидович',
    date: '15.11.2003',
    tasks: tasks.filter((task) => task.userID === 4)
  }
]
