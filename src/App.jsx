import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans from "./pages/Vans.jsx"
import './App.css'

import { Route, Routes} from "react-router-dom"
function App() {
  return(
    <>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/vans" element={<Vans/>}/>
      </Routes>


    </>
  )
}

export default App
