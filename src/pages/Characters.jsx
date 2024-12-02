import "./characters.css"
import Card from "/src/components/Card.jsx";
import Data from "/src/Data.js";
const Characters =()=>{
    return(
        <div className={"characters"}>
            {Data.map((character,key)=> (
                <div className={"characters__container"} key={key}>
                    <Card name={character.name} image={character.image} description={character.description.substring(0,200)}/>
                </div>
            ))}


        </div>
    )
}
export default Characters