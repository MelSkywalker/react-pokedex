import { useParams } from "react-router-dom";
import usePokemonDetails from "../hooks/usePokemonDetails";
import PokemonData from "../components/PokemonData";

function PokemonPage() {
    const { pokemon } = useParams();
    console.log(pokemon);
    const { pokemonDetails, loading, error } = usePokemonDetails(pokemon);

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    console.log(pokemonDetails);

    return (
        <div>
            {pokemonDetails && (
                <PokemonData
                    name={pokemonDetails.name}
                    id={pokemonDetails.id}
                    types={pokemonDetails.types}
                    height={pokemonDetails.height}
                    weight={pokemonDetails.weight}
                    abilities={pokemonDetails.abilities}
                />
            )}
        </div>
    )
}

export default PokemonPage;
