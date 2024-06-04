import { useState, useEffect, useRef } from "react";
import { fetchPokemonList, fetchPokemonDataByUrl } from "../api/api";
import { PokemonListItem } from "../types/pokemon";

function usePokemonList(offset: number, limit: number): { pokemonList: PokemonListItem[], loading: boolean, error: Error | null } {
    const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const prevOffsetRef = useRef<number | null>(null);

    useEffect(() => {
       const fetchData = async () => {
        if (prevOffsetRef.current === offset) return; // Don't fetch duplicates
            try {
                const data = await fetchPokemonList(offset, limit);
                const pokemonWithDetailsList = await Promise.all(
                    data.results.map(async (pokemon: PokemonListItem) => {
                        const pokemonDetails = await fetchPokemonDataByUrl(pokemon.url);
                        return { ...pokemon, ...pokemonDetails };
                    })
                );
                setPokemonList(([ ...pokemonList, ...pokemonWithDetailsList]));
                prevOffsetRef.current = offset;
            } catch (error) {
                setError(error as Error);
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [offset])

    return { pokemonList, loading, error };
}

export default usePokemonList;
