import { useState } from "react";
// import { TYPES_NUM } from "../config/types";
// import { TYPES_BASE_URL } from "../config/url";
import usePokemonList from "../hooks/usePokemonList";
import PokemonCard from "./PokemonCard";
import "./pokemonList.scss";

function PokemonList() {
    const [ offset, setOffset ] = useState(0);
    const limit = 20;
    const { pokemonList, loading, error } = usePokemonList(offset, limit);

    function handleClick(): void {
        setOffset(offset + limit);
    }

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <div className="pokemon-list">
            <ul>
                {pokemonList.map((pokemon) => (
                    <li key={`pokemon-item-${pokemon.name}`}>
                        <PokemonCard
                            name={pokemon.name}
                            id={pokemon.id}
                            types={pokemon.types}
                        />
                    </li>
                ))}
            </ul>
            <button onClick={handleClick}>Load More</button>
        </div>
    )
}

export default PokemonList;
