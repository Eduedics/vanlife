import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Vans from "./pages/Vans.jsx"
import VansDetails from "./pages/VansDetails.jsx"
import './App.css'

import { Route, Routes} from "react-router-dom"
function App() {
  return(
    <>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/vans" element={<Vans/>}/>
        <Route path="/vans/:id" element={<VansDetails/>}/>
      </Routes>


    </>
  )
}

export default App
