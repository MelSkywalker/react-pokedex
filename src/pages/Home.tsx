import React, { useEffect, useState } from "react";

interface Pokemon {
    name: string;
    url: string;
}

function Home () {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(false);
    
    const api = "https://pokeapi.co/api/v2/"
    const pokemonListUrl = "pokemon?limit=10000&offset=0" // TODO: lazy loading

    const fetchPokemonList = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${api}${pokemonListUrl}`);
            const data = await response.json();
            setPokemonList(data.results);
        } catch(error) {
            console.log("Error fetching pokemon list");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPokemonList();
    },[])

    return (
        <>
            <h1>Home</h1>
            {pokemonList.map((pokemon) => {
                return <p key={pokemon.name}>{pokemon.name}</p>
            })}
        </>
    )
}

export default Home;
