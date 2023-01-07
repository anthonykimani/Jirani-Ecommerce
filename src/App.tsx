import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col justify-around items-center">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home /> }></Route> */}
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
