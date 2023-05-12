import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../Redux/action';
import {connect} from 'react-redux';
import {useState, useEffect} from 'react';

const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav,myFavorite}) => {

  const [isFav, setIsFav]=useState(false);
  const handleFavorite=()=>{
    isFav ? removeFav(id) : addFav({id, name, status, species, gender, origin, image, onClose});
    setIsFav(!isFav)
  };
  
  
  useEffect(() => {
   if(!myFavorite) return null;
    myFavorite.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorite,id]);

  return (
     <div className={style.contenedor}>
       (
      <button onClick={handleFavorite}>{isFav? '❤️':'🤍'}</button>
   )  
      
   
      <Link to={`/detail/${id}`}>
         <div className={style.iam} > 
           <img src={image} alt="" />
          </div>
         
         <div >
            <p className={style.texto}>{name.toUpperCase()} </p>
         </div>  
            
       <div >
         <button className={style.boton} onClick={()=>onClose(id)}>X</button>
         </div>

         <div className={style.info}>
           
           <p className={style.alto}>
           <span style={{padding: '10px'}} >Species: {species}</span>
           <span >Gender: {gender}</span>
          </p>

           <p className={style.alto}>
         <span style={{padding: '10px'}}>Status: {status}</span>
         <span >Origin: {origin}</span>
          </p>  

         </div>
         </Link>
     </div>
    
  );
};
const mapDispatchToProps=(dispatch)=>{
     return{
      addFav:(character)=>dispatch(addFav(character)),
      removeFav: (id)=> dispatch(removeFav(id))
     }
};

const mapStateToProps=(state)=>{
     return{
      myFavorite: state.myFavorite
     }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);
