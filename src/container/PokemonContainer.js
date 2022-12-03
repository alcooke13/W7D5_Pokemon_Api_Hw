import PokemonList from "../components/PokemonList";
import "./PokemonContainer.css"
import Logo from '../images/pokemon_header.png'

const PokemonContainer = () => {
    
    return (
        <section>
            <img src={Logo} height={200} width={400} alt="pokemon" id="logo"/>
            <div className="container-box">
                <PokemonList/>
            
            </div>
        </section>
    );
};

export default PokemonContainer;