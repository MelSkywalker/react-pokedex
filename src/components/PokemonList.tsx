import { useState } from "react";
import usePokemonList from "../hooks/usePokemonList";
import { TYPES_NUM, TYPES_BASE_URL } from "../config/types";


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
        <>
            <ul>
                {pokemonList.map((pokemon) => (
                    <li key={`pokemon-item-${pokemon.name}`}>
                        <p>{pokemon.name}</p>
                            {pokemon.types.map(( {type} ) => (
                                // <p key={`${pokemon.name}-type-${type.name}`}>{type.name}</p>
                                <img
                                    key={`${pokemon.name}-type-${type.name}`}
                                    alt={`${type.name} type`}
                                    src={`${TYPES_BASE_URL}${TYPES_NUM[type.name]}.png`} />
                            ))}
                    </li>
                ))}
            </ul>
            <button onClick={handleClick}>Load More</button>
        </>
    )
}

export default PokemonList;
