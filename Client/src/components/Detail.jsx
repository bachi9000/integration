import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Detail = ()=>{
    const{id}=useParams();
const [character,setCharacter]=useState({});

useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

return(
    <div>
        <img src={character.image && character.image} alt=""/>
        <h1>{character.name && character.name}</h1>
        <h1>{character.status && character.status}</h1>
        <h1>{character.species && character.species}</h1>
        <h1>{character.gender && character.gender}</h1>
        <h1>{character.origin?.name && character.origin?.name}</h1>
      
        <Link to='/home'>
        <button>HOME</button>
        </Link>
    </div>
)

}
export default Detail;