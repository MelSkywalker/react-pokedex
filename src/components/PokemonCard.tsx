import classnames from "classnames";
import { IMG_BASE_URL } from "../config/constants";
import { addZeros, capitalize } from "../utils/utils";
import { PokemonTypeData } from "../types/pokemon";
import TypesContainer from "./TypesContainer";
import "./pokemonCard.scss";

interface PokemonCardProps {
    name: string,
    id: number,
    types: PokemonTypeData[]
}

function PokemonCard({
    name,
    id,
    types,
}: PokemonCardProps) {
    const mainType = types[0].type.name;
    const typeNames = types.map(type => type.type.name);
    return (
        <a href={`/${name}`} className="pokemon-card">
            <div className={classnames(`color-${mainType}-light`)}>
                <div className="data-container">
                    <p>Nº {addZeros(id)}</p>
                    <h2>{capitalize(name)}</h2>
                    <TypesContainer types={typeNames} pokemonName={name} />
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
