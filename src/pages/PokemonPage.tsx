import { useParams } from "react-router-dom";
import usePokemonDetails from "../hooks/usePokemonDetails";

const IMG_BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

function PokemonPage() {
    const { pokemon } = useParams();
    console.log(pokemon);
    const { pokemonDetails, loading, error } = usePokemonDetails(pokemon);

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    console.log(pokemonDetails);

    return (
        <div>
            <h1>Pokemon Page</h1>
            {pokemonDetails && (
                <div>
                    <p>No. {pokemonDetails.id}</p>
                    <p>{pokemonDetails.name}</p>
                    <img
                        src={`${IMG_BASE_URL}${pokemonDetails.id}.svg`}
                        alt={pokemonDetails.name}
                    />
                </div>
            )}
        </div>
    )
}

export default PokemonPage;
