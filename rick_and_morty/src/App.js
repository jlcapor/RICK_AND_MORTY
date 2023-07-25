import './App.css';
import Cards from './components/Cards';
// import characters, { Rick } from './data.js';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios'


function App() {
   const [characters, setCharacters] = useState([])
   
   const onSearch = (id)=>{
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.data)
      .then(( data ) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
     //setCharacters([...characters, example])
   }

   const onClose = (id) =>{
      const filtroEstado = characters.filter(character => character.id !== Number(id))
      setCharacters(filtroEstado)
   }
   
   return (
      <div className='App'>
         <Nav onSearch= {onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;