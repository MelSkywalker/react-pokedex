import classnames from "classnames";
import { IMG_BASE_URL } from "../config/url";
import { TYPES_NUM } from "../config/types";
import "./pokemonCard.scss";

interface PokemonCardProps {
    name: string,
    id: number,
    types: {
        slot: number,
        type: {
            name: keyof typeof TYPES_NUM,
            url: string
        }
    }[]
}

function PokemonCard({
    name,
    id,
    types,
}: PokemonCardProps) {
    const mainType = types[0].type.name;
    return (
        <a href={`/${name}`} className="pokemon-card">
            <div className={classnames(`color-${mainType}-light`)}>
                <div className={classnames('media-container', `color-${mainType}`)}>
                    <img
                        src={`${IMG_BASE_URL}${id}.svg`}
                        alt={name}
                    />
                </div>
                <div className="data-container">
                    <p>Nº {id}</p>
                    <p>{name}</p>
                </div>
            </div>
        </a>
    )
}

export default PokemonCard;
