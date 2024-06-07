import { useState } from "react";
import usePokemonList from "../hooks/usePokemonList";
import PokemonCard from "./PokemonCard";
import Loading from "./Loading";
import "./pokemonList.scss";

function PokemonList() {
    const [ offset, setOffset ] = useState(0);
    let limit: number = 20;
    const { pokemonList, loading, error } = usePokemonList(offset, limit);

    function handleClick(): void {
        setOffset(offset + limit);
    }

    if (error) return <div>Error: {error.message}</div>

    return (
        <>
            {!!loading && (<Loading />)}
            <div className="pokemon-list">
                {pokemonList.length > 0 && (    
                    <>
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
                        <button
                            onClick={handleClick}
                            className="load-more"
                        >
                            Load More
                        </button>
                    </>
                )}
            </div>
        </>
    )
}

export default PokemonList;
