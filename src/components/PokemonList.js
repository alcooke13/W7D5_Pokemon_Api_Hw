import { useState } from "react";
import PokemonCard from "./PokemonCard";
import './PokemonList.css'

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [filter, setFilter] = useState("");

    const pokemonData = "https://pokeapi.co/api/v2/pokemon?limit=50";
    fetch(pokemonData)
    .then(response => response.json())
    .then(pokemonList => setPokemons(pokemonList.results))

    const handleFilterChange = (event) => {
        setFilter(event.target.value.toUpperCase())
    }

    return (
        <section className="list-section" >
           <input type="text" placeholder="Search" onChange={handleFilterChange} />
           <div className="pokemon-list-box">{pokemons.filter((pokemon) => {
            return filter === '' ? pokemon : pokemon.name.toUpperCase().includes(filter)
           }).map((pokemon, index) => {
                return (
                    <PokemonCard pokemon={pokemon} key={index}/>
                ) 
           })}
    
            </div>
        </section>
    );
};

export default PokemonList;