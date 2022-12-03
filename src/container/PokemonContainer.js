import { useState } from "react";
import PokemonList from "../components/PokemonList";
import "./PokemonContainer.css"
const PokemonContainer = () => {
    
    return (
        <div className="container-box">
            <header></header>
            
            <PokemonList/>
            
        </div>
    );
};

export default PokemonContainer;