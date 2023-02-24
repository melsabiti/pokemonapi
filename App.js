import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; 
import Axios from "axios";



function App() {
    const [pokemonName, setPokemonName] = useState("");

    const searchPokemon = () => { Axios.get('https://pokeapi.co/api/v2/pokemon/${pokemonName}').then(response);
    
    return ( 
    <div className = "App" >
        <div className= "Title"> <h1> Pokemon Pokedex APP </h1>
        <input type="text" onChange={(event) => {setPokemonName(event.target.value)}}/>
        <button onClick={searchPokemon}>Search Pokemon</button>
    </div>
    </div> 
    );
}
export default App;
