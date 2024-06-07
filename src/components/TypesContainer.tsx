import classnames from "classnames";
import { PokemonTypeData } from "../types/pokemon";
import { TYPES_BASE_URL, TYPES_NUM } from "../config/constants";
import "./typesContainer.scss";

interface TypesContainerProps {
    types: PokemonTypeData[];
    pokemonName: string;
    spacingSize?: string;
}

function TypesContainer({ types, pokemonName, spacingSize = 'small'}: TypesContainerProps) {
    return (
        <div className={classnames('types-container', `${spacingSize}-spacing`)}>
            {types.map(( {type} ) => (
                    <img
                        src={`${TYPES_BASE_URL}${TYPES_NUM[type.name]}.png`}
                        alt={`${type.name} type`}
                        className="type-image"
                        key={`${pokemonName}-type-${type.name}`}
                    />
                ))}
        </div>
    )
}

export default TypesContainer;
