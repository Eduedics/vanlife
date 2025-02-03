import { useParams } from "react-router-dom"
import React from "react"


export default function VanDetails(){
    const params = useParams()
    const [van,setVan] = React.useState([])
    React.useEffect(()=>(
        fetch(`/api/vans/ ${params.id}`)
            .then(res => res.json())
            .then(data =>setVan(data.vans))
    ),[params.id])
    return(
        <div>
            <div>
                {van?
                <div key={van.id}>
                    <figure>
                        <img src={van.imgUrl} alt='van img'/>
                        <figcaption>van img</figcaption>
                    </figure>
                    <h3>{van.name}</h3>
                    <p>{van.Price}</p>
                    <div>
                        <i>{van.type}</i>
                    </div>
                </div>:<h2>loading....</h2>
                }
        </div>
        </div>
    )
}