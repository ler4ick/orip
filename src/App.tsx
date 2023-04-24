import { useEffect } from 'react'
import Routing from './components/Routing'
import { useAppDispatch } from './redux/hooks'
import { setLoggedIn } from './redux/features/authSlice'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const userLogin = localStorage.getItem('user')
    if (userLogin) {
      dispatch(setLoggedIn)
    }
  }, [])
  return <Routing />
}

export default App
