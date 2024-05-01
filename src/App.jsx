import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Video from './components/VideoDetail/Video'
import Detail from './components/Detail/Detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>

      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/videodetail' element={<Detail/>} />
    </Routes>
  
    </BrowserRouter>
  )
}

export default App
