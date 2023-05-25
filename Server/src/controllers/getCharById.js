const axios = require("axios");

const getCharById= async (req,res)=>{
  try{

    const {id}=req.params;
    const {data}= await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    
    let character = {
      id: data.id,
      name: data.name,
      gender: data.gender,
      origin: data.origin,
      image: data.image,
      status: data.status,
      species: data.species,
    };
    return character.name
    ? res.json(character)
    : res.status(404).send("Not found!");
  } catch(error){
    res.status(500).send(error.message);
  }


};
module.exports={
  getCharById,
};
// .then((result) => result.data )
//   .then(({name, gender, origin, status, image, species}) => {
    
//    res.writeHead(200,{'Content-Type': 'application/json'}).end(JSON.stringify(character))

// })
// .catch((error)=> res.writeHead(500,{'Content-Type':'text/plain'}).end(error.message))
// };
// module.exports = {
//   getCharById,