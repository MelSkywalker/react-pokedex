import classnames from "classnames";
import { PokemonTypeData, PokemonAbility } from "../types/pokemon";
import { IMG_BASE_URL, TYPES_BASE_URL, TYPES_NUM } from "../config/constants";
import { addZeros, capitalize, formatWeight, formatHeight } from "../utils/utils";
import weightImg from "../assets/images/data/weight.svg";
import heightImg from "../assets/images/data/height.svg";
import abilitiesImg from "../assets/images/data/abilities.svg";
import Data from "./Data";
import TypesContainer from "./TypesContainer";

import "./pokemonData.scss";

interface PokemonDataProps {
    name: string,
    id: number,
    height: number,
    weight: number,
    types: PokemonTypeData[],
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
    const mainType = types[0].type.name;

    return (
        <div className="pokemon-data">
            <div className={classnames('img-container', `bg-img-${mainType}`)}>
                <img
                    src={`${IMG_BASE_URL}${id}.png`}
                    alt={name}
                    className="pokemon-data-image"
                />
            </div>
            <div className="content">
                <h1>{capitalize(name)}</h1>
                <h2>Nº. {addZeros(id)}</h2>
                <TypesContainer types={types} pokemonName={name} spacingSize="medium" />
                <div className="data-container">
                    <Data data="weigth" value={formatWeight(weight)} imgSrc={weightImg} />
                    <Data data="height" value={formatHeight(height)} imgSrc={heightImg} />
                    <Data data="ability" value={capitalize(abilities[0].ability.name)} imgSrc={abilitiesImg} />
                </div>
            </div>
        </div>
    )
}

export default PokemonData;
