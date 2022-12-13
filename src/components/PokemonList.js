import { useState } from "react";
import PokemonCard from "./PokemonCard";
import './PokemonList.css'


const PokemonList = ({pokemons, setPokemons}) => {
    const [filter, setFilter] = useState("");
    const [sortedPokemons, setSortedPokemons] = useState([]);

    const handleFilterChange = (event) => {
        setFilter(event.target.value.toUpperCase())
    };

    const handleSortChange = () => {
            let listToSort = [...pokemons].sort((pokemon1, pokemon2) => {
                return pokemon1.species.name > pokemon2.species.name ? 1: -1
            })
            setPokemons(listToSort)
        }


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
        <input type="button" value="Sort A-Z" onClick={handleSortChange}/>
        <section className="list-section" >
           <ul className="pokemon-list-box">
            {/* {{sorted} === false ? {pokemonNodes}:} */}
            {pokemonNodes}
           </ul>
        </section>
        </>
    );
};

export default PokemonList;