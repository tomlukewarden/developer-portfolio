import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home></Home>
    </>
  )
}

export default App
