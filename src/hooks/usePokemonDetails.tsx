import { useState, useEffect } from "react";
import { fetchPokemonDataByName, fetchPokemonSpecies, fetchEvolutionChain } from "../api/api";
import { PokemonDetails, PokemonSpecies, EvolutionChainResponse } from "../types/pokemon";

interface FullPokemonDetails extends PokemonDetails, PokemonSpecies {};

function getEvolutionChainPokemonNames(evolutionChainResponse: EvolutionChainResponse) {
    const names = [];
    let current = evolutionChainResponse.chain;
    if (current.species && current.species.name) {
        names.push(current.species.name);
    }

    while (current.evolves_to.length && current.evolves_to.length > 0) {
        current = current.evolves_to[0];
        if (current.species && current.species.name) {
            names.push(current.species.name);
        }
    }

    return names;
}

async function fetchFullPokemonData(pokemonName: string) {
    const [pokemonData, pokemonSpecies] = await Promise.all([
        fetchPokemonDataByName(pokemonName),
        fetchPokemonSpecies(pokemonName),
    ]);
    return { ...pokemonData, ...pokemonSpecies };
}

function usePokemonDetails(pokemonName: string | undefined) {
    const [ pokemonDetails, setPokemonDetails ] = useState<FullPokemonDetails | null>(null)
    const [ evolutionChain, setEvolutionChain ] = useState<PokemonDetails[]>([]);
    const [ loading, setLoading ] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!pokemonName) {
            setError(new Error("Pokemon name is required"));
            console.log(error);
            return;
        }
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await fetchFullPokemonData(pokemonName);
                setPokemonDetails(data);

                // fetch data for evolution chain
                // TODO: handle eevee evolution
                const evolutionChainUrl: string = data.evolution_chain.url;
                const evolutionChainResponse: EvolutionChainResponse = await fetchEvolutionChain(evolutionChainUrl);
                const evolutionChainNames = getEvolutionChainPokemonNames(evolutionChainResponse);
                const evolutionChainDataPromises = evolutionChainNames.length > 1 ?
                evolutionChainNames.map(async (pokemon) => {
                    if (pokemon === pokemonName) {
                        return data
                    }
                    const evolData = await fetchPokemonDataByName(pokemon);
                    return evolData;
                }): [];
                const evolutionChainData = await Promise.all(evolutionChainDataPromises);
                setEvolutionChain(evolutionChainData);
            } catch (error) {
                setError(error as Error);
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [pokemonName]);

    return { pokemonDetails, evolutionChain, loading, error };
}

export default usePokemonDetails;
