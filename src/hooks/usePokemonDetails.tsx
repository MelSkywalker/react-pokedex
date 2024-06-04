import { useState, useEffect } from "react";
import { fetchPokemonDataByName } from "../api/api";
import { PokemonDetails } from "../types/pokemon";

function usePokemonDetails(pokemonName: string | undefined) {
    const [ pokemonDetails, setPokemonDetails ] = useState<PokemonDetails | null>(null)
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
                const data = await fetchPokemonDataByName(pokemonName);
                setPokemonDetails(data);
            } catch (error) {
                setError(error as Error);
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [pokemonName]);

    return { pokemonDetails, loading, error };
}

export default usePokemonDetails;
