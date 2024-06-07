import classnames from "classnames";
import { PokemonType } from "../types/pokemon";
import { TYPES_BASE_URL, TYPES_NUM } from "../config/constants";
import "./typesContainer.scss";

interface TypesContainerProps {
    types: PokemonType[];
    pokemonName: string;
    spacingSize?: string;
}

function TypesContainer({ types, pokemonName, spacingSize = 'small'}: TypesContainerProps) {
    console.log('=====', types);
    return (
        <div className={classnames('types-container', `${spacingSize}-spacing`)}>
            {types.map((type) => (
                    <img
                        src={`${TYPES_BASE_URL}${TYPES_NUM[type]}.png`}
                        alt={`${type} type`}
                        className="type-image"
                        key={`${pokemonName}-type-${type}`}
                    />
                ))}
        </div>
    )
}

export default TypesContainer;
