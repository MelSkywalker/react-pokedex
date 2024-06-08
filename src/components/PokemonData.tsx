import classnames from "classnames";
import { PokemonTypeData, PokemonAbility, PokemonType } from "../types/pokemon";
import { IMG_BASE_URL } from "../config/constants";
import { addZeros, capitalize, formatWeight, formatHeight, getTypeNames } from "../utils/utils";
import { calculatePokemonWeaknesses } from "../utils/typesChart";

import Data from "./Data";
import TypesContainer from "./TypesContainer";
import EvolutionChain from "./EvolutionChain";

import weightImg from "../assets/images/data/weight.svg";
import heightImg from "../assets/images/data/height.svg";
import abilitiesImg from "../assets/images/data/abilities.svg";

import "./pokemonData.scss";

interface PokemonDataProps {
    name: string,
    id: number,
    height: number,
    weight: number,
    types: PokemonTypeData[],
    abilities: PokemonAbility[],
    description: string,
    evolutionChain: any
}

function PokemonData({
    name,
    id,
    types,
    height,
    weight,
    abilities,
    description,
    evolutionChain,
}: PokemonDataProps) {
    const mainType = types[0].type.name;
    const typeNames = getTypeNames(types);
    const weaknesses: PokemonType[] = calculatePokemonWeaknesses(typeNames);
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
                <TypesContainer types={typeNames} pokemonName={name} spacingSize="medium" />
                <p className="description">{description}</p>
                <div className="data-container">
                    <Data data="weigth" value={formatWeight(weight)} imgSrc={weightImg} />
                    <Data data="height" value={formatHeight(height)} imgSrc={heightImg} />
                    <Data data="ability" value={capitalize(abilities[0].ability.name)} imgSrc={abilitiesImg} />
                </div>
                <div className="weaknesses-container">
                    <h3>Weaknesses</h3>
                    <TypesContainer types={weaknesses} pokemonName={name} spacingSize="medium" />
                </div>
            </div>
            <div className="evolutions">
                <h3>Evolutions</h3>
                <EvolutionChain evolutionChain={evolutionChain} />
            </div>
        </div>
    )
}

export default PokemonData;
