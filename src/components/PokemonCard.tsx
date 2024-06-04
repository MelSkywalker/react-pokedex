import { TYPES_NUM } from "../config/types";

interface PokemonCardProps {
    name: string,
    id: number
}

function PokemonCard({
    name,
    id,
}: PokemonCardProps) {
    return (
        <a href={`/${name}`} className="pokemon-card">
            <p>{name}</p>
            <p>{id}</p>
        </a>
    )
}

export default PokemonCard;
