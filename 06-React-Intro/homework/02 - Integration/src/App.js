import './App.css';
import Cards from './components/Cards';
import NavBar from './components/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Routes,Route,useLocation,useNavigate} from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Forms from './components/Form';
import Favorite from './components/Favorite';

const EMAIL='bachi@gmail.com';
const PASSWORD='123'

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

function App() {
  const [characters, setCharacters]=useState([]);
  const {pathname}=useLocation();

const navigate= useNavigate();
const [access, setAccess]=useState(false);

function login(userData){
   if(userData.password === PASSWORD && userData.email===EMAIL){
      setAccess(true);
      navigate('/home');
   }
}
useEffect(()=>{
   !access && navigate('/');
}, [access,navigate]);

//   const onSearch= (id) => {
//     setCharacters([...characters, example])
//   };
function onSearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}
const onClose=(id)=>{
  setCharacters(
   characters.filter((char)=>{
   return char.id !== Number(id)
})) 
};

   return (
     
      <div >
       {pathname !== '/' && <NavBar onSearch={onSearch}/> } 
     <Routes>
      <Route path="/" element={<Forms login={login}/>}/>
      <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>     
      <Route path="/Favorite" element={<Favorite/>}/>     
      </Routes> 

      </div>
   );
}

export default App;

/* <Card 
             id={Rick.id}
             name={Rick.name}
             status={Rick.status}
             species={Rick.species}
             gender={Rick.gender}
             origin={Rick.origin.name}
             image={Rick.image}
             onClose={() => window.alert('Emulamos que se cierra la card')}></Card> */
