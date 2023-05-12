
const addFav=(character)=>{
    return {type: "ADD_FAV" , payload:character}
};

const removeFav=(id)=>{
return{ type:"REMOVE_FAV", payload:id}
};
const filterCards=(gender)=>{
    return {type:"FILTER", payload: gender}
}
const orderCards=(order)=>{
    return {type:"ORDER", payload:order}
}
export{
    addFav,removeFav,filterCards,orderCards
} ;