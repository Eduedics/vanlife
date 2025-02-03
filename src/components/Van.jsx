import './VanStyles.css'
import { Link} from "react-router-dom"
// import { FaBars, FaTimes } from "react-icons/fa"
import React from 'react'


export default function Footer(){
    const [vanData,setVanData] =React.useState([])
    React.useEffect(
        ()=>{
            fetch("")
                .then(res=>res.json())
                .then(data=>setVanData(data.vans))
        },[]
    )
    return(
        <Link to="/vans/${myData.id}">
            <div>
            <h1>Exprole van options</h1>
            {vanData.map( myData=>(
                <div key={myData.id}>
                    <figure>
                        <img src={myData.imgUrl} alt='van img'/>
                        <figcaption>van img</figcaption>
                    </figure>
                    <h3>{myData.name}</h3>
                    <p>{myData.Price}</p>
                    <div>
                        <i>{myData.type}</i>
                    </div>
                </div>
            ))
            }
        </div>
        </Link>
        
        
        )
        
}