import { useState } from "react";
import PokemonCard from "./PokemonCard";
import './PokemonList.css'

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [filter, setFilter] = useState("");
    // const [sortedPokemons, setSortedPokemons] = useState([]);

    const pokemonData = "https://pokeapi.co/api/v2/pokemon?limit=150";
    fetch(pokemonData)
    .then(response => response.json())
    .then(data => setPokemons(data.results))
    
    const handleFilterChange = (event) => {
        setFilter(event.target.value.toUpperCase())
    }

    const handleSortChange = () => {
        console.log(pokemons)
        const sortedPokemons = [...pokemons].sort((a,b) => {
            return a.name> b.name ? 1: -1
        })
        setPokemons(sortedPokemons);
        console.log(sortedPokemons)
    }
    
    return (
        <>
        <input type="text" placeholder="Search" onChange={handleFilterChange} id="searchBar"/>
        <input type="button" value="Sort A-Z" id="sort-button" onClick={handleSortChange}/>
        <section className="list-section" >
           <div className="pokemon-list-box">{pokemons.filter((pokemon) => {
            return filter === '' ? pokemon : pokemon.name.toUpperCase().includes(filter)
           }).map((pokemon, index) => {
                return (
                    <PokemonCard pokemon={pokemon} key={index}/>
                ) 
           })}
    
            </div>
        </section>
        </>
    );
};

export default PokemonList;