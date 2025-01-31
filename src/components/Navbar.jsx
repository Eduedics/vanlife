import './NavbarStyles.css'
import { Link} from "react-router-dom"


export default function Footer(){
    return(
        <header>
            
            <img/>
            <ul>
                <li><Link>home</Link></li>
                <li><Link>About</Link></li>
            </ul>
        </header>
    )
}