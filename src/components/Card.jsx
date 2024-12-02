import "./card.css"
import {useNavigate} from "react-router-dom";
const Card =({image,name,description})=>{
    const navigate =useNavigate()
    return(
        <div className={"image__container"} onClick={(e)=>
            navigate(`/character/description/${e.target.alt}`)
        }
        >
            <div className={"img__container"}>
                <img src={image} alt={name}/>
                <h2>{name}</h2>
            </div>
            <p>{description}</p>
        </div>
    )
}
export default Card
