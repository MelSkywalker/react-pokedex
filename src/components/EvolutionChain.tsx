import classnames from "classnames";
import { IMG_BASE_URL } from "../config/constants";
import { PokemonTypeData } from "../types/pokemon";
import { addZeros, capitalize, getTypeNames } from "../utils/utils";
import TypesContainer from "./TypesContainer";

import "./evolutionChain.scss";

interface EvolutionChainItemProps {
    name: string,
    id: number,
    types: PokemonTypeData[]
};

function EvolutionChainItem({ name, id, types }: EvolutionChainItemProps) {
    const mainType = types[0].type.name;

    return (
        <div className="evolution-chain-item">
            <div className={classnames(`evol-img-${mainType}`)}>
                <img
                    src={`${IMG_BASE_URL}${id}.png`}
                    alt={name}
                    className="evolution-item-img"
                />
            </div>
            <div className="evolution-data-container">
                <p className="evol-name">{capitalize(name)}</p>
                <p className="evol-num">{addZeros(id)}</p>
                <TypesContainer types={getTypeNames(types)} pokemonName={name} />
            </div>
        </div>
    )
}

interface EvolutionChainProps {
    evolutionChain: EvolutionChainItemProps[]
}

function EvolutionChain({
    evolutionChain
}: EvolutionChainProps) {    
    return (
        <div className="evolution-chain">
            {evolutionChain.map((pokemon) => (
                <EvolutionChainItem key={pokemon.id} {...pokemon} />
            ))}
        </div>
    )
}

export default EvolutionChain;
