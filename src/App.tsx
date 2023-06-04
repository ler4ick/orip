import { type ReactElement } from 'react'
import type React from 'react'
import { useEffect } from 'react'
import Routing from './components/Routing'
import { useAppDispatch } from './redux/hooks'

function App(): ReactElement<React.FC> {
  const dispatch = useAppDispatch()

  return <Routing />
}

export default App
