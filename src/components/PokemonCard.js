import './PokemonCard.css'

const PokemonCard = ({pokemon}) => {
    return (
        <div className='pokemon-card'>{pokemon.name}</div>
    );
};

export default PokemonCard;