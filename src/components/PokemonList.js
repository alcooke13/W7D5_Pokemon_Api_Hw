import { useState } from "react";
import PokemonCard from "./PokemonCard";
import './PokemonList.css'


const PokemonList = ({pokemons}) => {
    // const [filter, setFilter] = useState("");
    // const [sortedPokemons, setSortedPokemons] = useState(null);

    // const pokemonData = "https://pokeapi.co/api/v2/pokemon?limit=150";
    // fetch(pokemonData)
    // .then(response => response.json())
    // .then(data => setPokemons(data.results))
    
    // const handleFilterChange = (event) => {
    //     setFilter(event.target.value.toUpperCase())
    // }

    // const handleSortChange = () => {
    //     let sortedPokemons = [...pokemons].sort((a,b) => {
    //         return a.name> b.name ? 1: -1
    //     })
    //     setSortedPokemons(sortedPokemons);
    // }

    const pokemonNodes = pokemons.map((pokemon, index) => {
        return (
            <PokemonCard key={index} pokemon={pokemon}/>
        )
    })
    
    

    return (
        <>
        {/* <input type="text" placeholder="Search" onChange={handleFilterChange} id="searchBar"/>
        <input type="button" value="Sort A-Z" id="sort-button" onClick={handleSortChange}/> */}
        <section className="list-section" >
           <ul className="pokemon-list-box">
            {pokemonNodes}
           </ul>
           
           {/* <div className="pokemon-list-box">{pokemons.filter((pokemon) => {
            return filter === '' ? pokemon : pokemon.name.toUpperCase().includes(filter)
           }).map((pokemon, index) => {
                return (
                    <PokemonCard pokemon={pokemon} key={index}/>
                ) 
           })}
    
            </div> */}
        </section>
        </>
    );
};

export default PokemonList;