import { useParams } from "react-router-dom";
import usePokemonDetails from "../hooks/usePokemonDetails";
import PokemonData from "../components/PokemonData";

function PokemonPage() {
    const { pokemon } = useParams();
    const { pokemonDetails, evolutionChain, loading, error } = usePokemonDetails(pokemon);

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    console.log(pokemonDetails);

    const simplifiedEvolutionChain = evolutionChain.map((pokemon) => ({
        name: pokemon.name,
        id: pokemon.id,
        types: pokemon.types,
    }));

    return (
        <div>
            {pokemonDetails && (
                <PokemonData
                    name={pokemonDetails.name}
                    id={pokemonDetails.id}
                    types={pokemonDetails.types}
                    description={pokemonDetails.flavor_text_entries[21].flavor_text}
                    height={pokemonDetails.height}
                    weight={pokemonDetails.weight}
                    abilities={pokemonDetails.abilities}
                    evolutionChain={simplifiedEvolutionChain}
                />
            )}
        </div>
    )
}

export default PokemonPage;
