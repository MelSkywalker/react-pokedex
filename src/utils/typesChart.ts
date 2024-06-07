import { PokemonType } from "../types/pokemon";

interface TypeChart {
    [key: string]: {
        strongAgainst: PokemonType[],
        weakAgainst: PokemonType[]
    }
}


const typeChart: TypeChart = {
    'normal': {
        strongAgainst: [],
        weakAgainst: ['fighting']
    },
    'fire': {
        strongAgainst: ['grass', 'ice', 'bug', 'steel'],
        weakAgainst: ['water', 'ground', 'rock']
    },
    'water': {
        strongAgainst: ['fire', 'ground', 'rock'],
        weakAgainst: ['grass', 'electric']
    },
    'electric': {
        strongAgainst: ['water', 'flying'],
        weakAgainst: ['ground']
    },
    'grass': {
        strongAgainst: ['water', 'ground', 'rock'],
        weakAgainst: ['fire', 'ice', 'poison', 'flying', 'bug']
    },
    'ice': {
        strongAgainst: ['grass', 'ground', 'flying', 'dragon'],
        weakAgainst: ['fire', 'fighting','rock', 'steel']
    },
    'fighting': {
        strongAgainst: ['normal', 'ice', 'rock', 'dark', 'steel'],
        weakAgainst: ['flying', 'psychic', 'fairy']
    },
    'poison': {
        strongAgainst: ['grass', 'fairy'],
        weakAgainst: ['ground', 'psychic']
    },
    'ground': {
        strongAgainst: ['fire', 'electric', 'poison', 'rock', 'steel'],
        weakAgainst: ['water', 'grass', 'ice']
    },
    'flying': {
        strongAgainst: ['grass', 'fighting', 'bug'],
        weakAgainst: ['electric', 'ice', 'rock']
    },
    'psychic': {
        strongAgainst: ['fighting', 'poison'],
        weakAgainst: ['bug', 'ghost', 'dark']
    },
    'bug': {
        strongAgainst: ['grass', 'psychic', 'dark'],
        weakAgainst: ['fire', 'flying', 'rock']
    },
    'rock': {
        strongAgainst: ['fire', 'ice', 'flying', 'bug'],
        weakAgainst: ['water', 'grass', 'fighting', 'ground', 'steel']
    },
    'ghost': {
        strongAgainst: ['psychic', 'ghost'],
        weakAgainst: ['dark', 'ghost']
    },
    'dragon': {
        strongAgainst: ['dragon'],
        weakAgainst: ['ice', 'dragon', 'fairy']
    },
    'dark': {
        strongAgainst: ['psychic', 'ghost'],
        weakAgainst: ['fighting', 'bug', 'fairy']
    },
    'steel': {
        strongAgainst: ['ice', 'rock', 'fairy'],
        weakAgainst: ['steel', 'fighting', 'ground']
    },
    'fairy': {
        strongAgainst: ['fighting', 'dragon', 'dark'],
        weakAgainst: ['poison', 'steel']
    }
}

export function calculatePokemonWeaknesses(types: PokemonType[]): PokemonType[] {
    if (types.length === 1) return typeChart[types[0]].weakAgainst;
    
    const [type1, type2] = types;
    let weaknesses = typeChart[type1].weakAgainst.concat(typeChart[type2].weakAgainst);
    weaknesses = [...new Set(weaknesses)];
    weaknesses.filter(weakness => weakness != type1);
    weaknesses = weaknesses.filter(weakness => weakness != type2);
    const weaknessesToRemove = weaknesses.filter(
      weakness =>
      typeChart[type1].strongAgainst.includes(weakness) ||
      typeChart[type2].strongAgainst.includes(weakness));
    const filteredWeaknesses = weaknesses.filter(
      weakness => !weaknessesToRemove.includes(weakness)
    );
    return filteredWeaknesses;
}
