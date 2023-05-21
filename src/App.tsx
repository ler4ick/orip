import { type ReactElement } from 'react'
import type React from 'react'
import { useEffect } from 'react'
import Routing from './components/Routing'
import { useAppDispatch } from './redux/hooks'
import { setLoggedIn } from './redux/features/authSlice'

function App(): ReactElement<React.FC> {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const userLogin = localStorage.getItem('user')
    if (userLogin != null) {
      dispatch(setLoggedIn)
    }
  }, [])
  return <Routing />
}

export default App
