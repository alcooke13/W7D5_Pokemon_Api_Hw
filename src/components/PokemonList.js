import { useState } from "react";
import PokemonCard from "./PokemonCard";
import './PokemonList.css'


const PokemonList = ({pokemons}) => {
    const [filter, setFilter] = useState("");
    
    const handleFilterChange = (event) => {
        setFilter(event.target.value.toUpperCase())
    };

    const pokemonNodes = pokemons.filter((pokemon) => {
        return filter === '' ? pokemon : pokemon.name.toUpperCase().includes(filter)
    }).map((pokemon, index) => {
        return (
            <PokemonCard key={index} pokemon={pokemon}/>
        );
    });

    return (
        <>
        <input type="text" placeholder="Search" onChange={handleFilterChange} id="searchBar"/>
        <section className="list-section" >
           <ul className="pokemon-list-box">
            {pokemonNodes}
           </ul>
        </section>
        </>
    );
};

export default PokemonList;