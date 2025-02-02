import './NavbarStyles.css'
import { Link} from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import React from 'react'


export default function Footer(){
    const [isOpen,setIsOpen] =React.useState(false)
    return(
        <header>
            <h1>#vanlife</h1>
            <ul className={`listitems ${isOpen ? "active" : ""}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to = "about/">About</Link></li>
                <li><Link to = "vans/">Vans</Link></li>
            </ul>
            <div className="hamburger" onClick={()=>setIsOpen(!isOpen)}>
                {isOpen?<FaTimes size={20}/>: <FaBars size={20} />}
            </div>
        </header>
    )
}