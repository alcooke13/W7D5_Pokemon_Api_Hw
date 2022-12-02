import { useState } from "react";
import PokemonList from "../components/PokemonList";
import "./PokemonContainer.css"
const PokemonContainer = () => {
    const [pokemons, setPokemons] = useState([]);
    
    
    const pokemonData = "https://pokeapi.co/api/v2/pokemon";
    fetch(pokemonData)
    .then(response => response.json())
    .then(pokemonList => setPokemons(pokemonList.results))
    
    
     
    
    return (
        <div>
            <h1>Pokedex</h1>
            <PokemonList pokemons={pokemons}/>
            
        </div>
    );
};

export default PokemonContainer;