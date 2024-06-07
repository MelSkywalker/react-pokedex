import classnames from "classnames";
import { IMG_BASE_URL, TYPES_BASE_URL, TYPES_NUM } from "../config/constants";
import { addZeros, capitalize } from "../utils/utils";
import { PokemonType } from "../types/pokemon";
import "./pokemonCard.scss";

interface PokemonCardProps {
    name: string,
    id: number,
    types: PokemonType[]
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
                <div className="data-container">
                    <p>Nº {addZeros(id)}</p>
                    <h2>{capitalize(name)}</h2>
                    <div className="types-container">
                        {types.map(( {type} ) => (
                            <img
                                src={`${TYPES_BASE_URL}${TYPES_NUM[type.name]}.png`}
                                alt={`${type.name} type`}
                                className="type-image"
                                key={`${name}-type-${type.name}`}
                            />
                        ))}
                    </div>
                </div>
                <div className={classnames('media-container', `color-${mainType}`)}>
                    <img
                        src={`${IMG_BASE_URL}${id}.png`}
                        alt={name}
                        className="pokemon-card-image"
                    />
                </div>
            </div>
        </a>
    )
}

export default PokemonCard;
