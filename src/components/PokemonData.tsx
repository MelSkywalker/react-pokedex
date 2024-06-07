import { PokemonType, } from "../types/pokemon";
import { IMG_BASE_URL, TYPES_BASE_URL, TYPES_NUM } from "../config/constants";
import { addZeros, capitalize } from "../utils/utils";
import Data from "./Data";

interface PokemonDataProps {
    name: string,
    id: number,
    height: number,
    weight: number,
    types: PokemonType[],
  }

function PokemonData({
    name,
    id,
    types,
    height,
    weight,
}: PokemonDataProps) {
    return (
        <div>
            <img
                src={`${IMG_BASE_URL}${id}.png`}
                alt={name}
            />
            <h1>{capitalize(name)}</h1>
            <h2>Nº. {addZeros(id)}</h2>
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
            <Data data="weigth" value={weight} />
            <Data data="height" value={height} />
        </div>
    )
}

export default PokemonData;
