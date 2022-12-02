import PokemonCard from "./PokemonCard";
import './PokemonList.css'

const PokemonList = ({pokemons}) => {
    
    return (
        <section >
           <h2>Pokemons</h2>
           <ul className="pokemon-list-box">{pokemons.map((pokemon, index) => {
                return (
                    <PokemonCard pokemon={pokemon} key={index}/>
                )
           })} 
    
            </ul>
        </section>
    );
};

export default PokemonList;