import { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";
import "./PokemonContainer.css"
import Logo from '../images/pokemon_header.png'

const PokemonContainer = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
        .then(res => res.json())
        .then((data) => {
            // console.log(data)
            const pokemonDataPromises = data.results.map((pokemon) => {
            return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            .then(res => res.json());
          })  
          Promise.all(pokemonDataPromises)
          .then((results) => {
            // console.log(results)
            setPokemons(results);
          });
        });

        


    }, []);

    return (
        <section>
            
            <img src={Logo} height={200} width={400} alt="pokemon" id="logo"/>
            <div className="container-box">
                <PokemonList pokemons={pokemons} setPokemons={setPokemons}/>
            </div>
        </section>
    );
};

export default PokemonContainer;