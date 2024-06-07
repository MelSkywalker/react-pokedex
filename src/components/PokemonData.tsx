import { PokemonType, PokemonAbility } from "../types/pokemon";
import { IMG_BASE_URL, TYPES_BASE_URL, TYPES_NUM } from "../config/constants";
import { addZeros, capitalize } from "../utils/utils";
import weightImg from "../assets/images/data/weight.svg";
import heightImg from "../assets/images/data/height.svg";
import abilitiesImg from "../assets/images/data/abilities.svg";
import Data from "./Data";

interface PokemonDataProps {
    name: string,
    id: number,
    height: number,
    weight: number,
    types: PokemonType[],
    abilities: PokemonAbility[],
  }

function PokemonData({
    name,
    id,
    types,
    height,
    weight,
    abilities
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
            <Data data="weigth" value={weight} imgSrc={weightImg} />
            <Data data="height" value={height} imgSrc={heightImg} />
            <Data data="abilities" value={capitalize(abilities[0].ability.name)} imgSrc={abilitiesImg} />
        </div>
    )
}

export default PokemonData;
