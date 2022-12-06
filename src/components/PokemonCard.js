import './PokemonCard.css'

const PokemonCard = ({pokemon}) => {
    return (
        <li className="pokemon-card">
            <section>
                <h3>{pokemon.species.name.toUpperCase()}</h3>
                <img src={pokemon.sprites.front_default} alt={pokemon.species.name} />
                <p>HEALTH: {pokemon.stats[0].base_stat}</p>
                <p>TYPE: {pokemon.types[0].type.name.toUpperCase()}</p>
            </section>

        </li>
    );
};

export default PokemonCard;