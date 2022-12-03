import PokemonCard from "./PokemonCard";
import './PokemonList.css'

const PokemonList = ({pokemons}) => {
    
    return (
        <section className="list-section" >
           <div className="pokemon-list-box">{pokemons.map((pokemon, index) => {
                return (
                    <PokemonCard pokemon={pokemon} key={index}/>
                )
           })} 
    
            </div>
        </section>
    );
};

export default PokemonList;