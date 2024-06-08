import { PokemonType, PokemonTypeData } from "../types/pokemon";

function addZeros(num: number): string {
    let str = num.toString();
    while (str.length < 3) {
        str = "0" + str;
    }
    return str;
}

function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function fixedProperty(property: number): string {
    return (property / 10).toFixed(1);
}

function formatWeight(weight: number): string {
    return `${fixedProperty(weight)} kg`;
}

function formatHeight(height: number): string {
    return `${fixedProperty(height)} m`;
}

function getTypeNames(types: PokemonTypeData[]): PokemonType[] {
    return types.map(type => type.type.name);
}

export {
    addZeros,
    capitalize,
    formatWeight,
    formatHeight,
    getTypeNames
};
