import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import './App.css'

import { Route, Routes} from "react-router-dom"
function App() {
  return(
    <>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>


    </>
  )
}

export default App
