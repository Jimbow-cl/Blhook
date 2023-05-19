import router from './layout/Router'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import UpdatesTheTime from './components/timer/Timer'

function App() {



  return (<RouterProvider router={router} />)

}

export default App
