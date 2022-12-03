import './PokemonCard.css'

const PokemonCard = ({pokemon}) => {
    return (
        <div className='pokemon-card'>{pokemon.name.toUpperCase()}</div>
    );
};

export default PokemonCard;