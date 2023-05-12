import {connect} from 'react-redux';
import Card from './Card';
import { useDispatch } from 'react-redux';
import {filterCards,orderCards} from "../Redux/action";
import { useState } from 'react';

const Favorite=({myFavorites})=>{
    const [aux,setAux]=useState(false);

    const dispatch=useDispatch();
    const handleOrder=(event)=>{
        dispatch(orderCards(event.target.value));
        setAux(!aux)
    };
    const handleFilter=(event)=>{
        dispatch(filterCards(event.target.value))
    };

    return(
        <div>

            <select onChange={handleOrder}> 
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select onChange={handleFilter}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Genderless">Genderless</option>
              <option value="Unknown">Unknown</option>

            </select>

         {
            myFavorites?.map((pepito)=>{
                return(
                    <Card
             key={pepito.id}
             id={pepito.id}
             name={pepito.name}
             status={pepito.status}
             species={pepito.species}
             gender={pepito.gender}
             origin={pepito.origin.name}
             image={pepito.image}
             onClose={pepito.onClose}
                    
                    />
                )
            })
         }
        </div>
    )
}

const mapStateToProps=(state)=>{
return{
    myFavorites: state.myFavorites
}
};

export default connect(mapStateToProps,null)(Favorite);
