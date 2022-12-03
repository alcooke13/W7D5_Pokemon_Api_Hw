import { useState } from "react";
import PokemonList from "../components/PokemonList";
import "./PokemonContainer.css"
const PokemonContainer = () => {
    const [pokemons, setPokemons] = useState([]);
    
    
    const pokemonData = "https://pokeapi.co/api/v2/pokemon?limit=50";
    fetch(pokemonData)
    .then(response => response.json())
    .then(pokemonList => setPokemons(pokemonList.results))
    
    
    return (
        <div>
            <header></header>
            <PokemonList pokemons={pokemons}/>
            
        </div>
    );
};

export default PokemonContainer;