import Data from "/src/Data.js";
import "./characterDesc.css"
import Carrousel from "../components/Carrousel.jsx";

const CharacterDesc =()=>{
    const name =window.location.pathname
    let character = name.substring(23,name.length)

    if(character.startsWith("%")){
        character = character.substring(3,character.length)
    }
    const findCharacter =Data.find(char=>char.name.trim() ===character)

    const cleanImage =findCharacter.image.substring(1,findCharacter.image.length)
    console.log(cleanImage)

        return(
        <div className={"character__description"}>
            <img src={cleanImage} alt={findCharacter.name}/>
            <div className={"character__description__text"}>
                <h2 >{findCharacter.name}</h2>
                <div className={"desc"}>
                    <h2>Description:</h2>
                </div>
                <p>{findCharacter.description}</p>
            </div>
        </div>
        )
}

export default CharacterDesc