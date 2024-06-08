export type PokemonType = 'normal' | 'fire' | 'water' | 'electric' | 'grass' | 'ice' | 'fighting' | 'poison' | 'ground' | 'flying' | 'psychic' | 'bug' | 'rock' | 'ghost' | 'dragon' | 'dark' | 'steel' | 'fairy';

interface NamedAPIResource {
  name: string;
  url: string;
}

export interface PokemonListItem extends PokemonDetails {
    name: string,
    url: string
}

export interface PokemonDetails {
    abilities: PokemonAbility[],
    base_experience: number,
    cries: {
        latest: string,
        legacy: string
    },
    forms: NamedAPIResource[],
    game_indices: {
        game_index: number,
        version: {
            name: string,
            url: string
        }
    }[],
    height: number,
    held_items: string[],
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    moves: {
        move: NamedAPIResource,
        version_group_details: {
            level_learned_at: number,
            move_learn_method: {
                name: string,
                url: string
            },
            version_group: NamedAPIResource
        }[]
    }[],
    name: string,
    order: number,
    past_abilities: string[],
    past_types: string[],
    species: NamedAPIResource,
    sprites: {
        back_default: string,
        back_female: string | null,
        back_shiny: string,
        back_shiny_female: string | null,
        front_default: string,
        front_female: string | null,
        front_shiny: string,
        front_shiny_female: string | null,
        other: {
            dream_world: {
                front_default: string,
                front_female: string | null
            },
            home: {
                front_default: string,
                front_female: string | null,
                front_shiny: string,
                front_shiny_female: string | null
            },
            official_artwork: {
                front_default: string,
                front_shiny: string
            },
            showdown: {
                back_default: string,
                back_female: string | null,
                back_shiny: string,
                back_shiny_female: string | null,
                front_default: string,
                front_female: string | null,
                front_shiny: string,
                front_shiny_female: string | null,
            }
        },
        versions: {
           "generation-i": {
                "red-blue": {
                    back_default: string,
                    back_gray: string,
                    back_transparent: string,
                    front_default: string,
                    front_gray: string,
                    front_transparent: string
                },
                yellow: {
                    back_default: string,
                    back_gray: string,
                    back_transparent: string,
                    front_default: string,
                    front_gray: string,
                    front_transparent: string
                }
           },
           "generation-ii": {
                crystal: {
                    back_default: string,
                    back_shiny: string,
                    back_shiny_transparent: string,
                    back_transparent: string,
                    front_default: string,
                    front_shiny: string,
                    front_shiny_transparent: string,
                    front_transparent: string
                },
                gold: {
                    back_default: string,
                    back_shiny: string,
                    front_default: string,
                    front_shiny: string,
                    front_transparent: string
                },
                silver: {
                    back_default: string,
                    back_shiny: string,
                    front_default: string,
                    front_shiny: string,
                    front_transparent: string
                }
           },
           "generation-iii": {
                emerald: {
                    front_default: string,
                    front_shiny: string
                },
                "firered-leafgreen": {
                    back_default: string,
                    back_shiny: string,
                    front_default: string,
                    front_shiny: string
                },
                "ruby-sapphire": {
                    back_default: string,
                    back_shiny: string,
                    front_default: string,
                    front_shiny: string
                }
           },
           "generation-iv": {
                "diamond-pearl": {
                    back_default: string,
                    back_female: string | null,
                    back_shiny: string,
                    back_shiny_female: string | null,
                    front_default: string,
                    front_female: string | null,
                    front_shiny: string,
                    front_shiny_female: string | null
                },
                "heartgold-soulsilver": {
                    back_default: string,
                    back_female: string | null,
                    back_shiny: string,
                    back_shiny_female: string | null,
                    front_default: string,
                    front_female: string | null,
                    front_shiny: string,
                    front_shiny_female: string | null
                },
                platinum: {
                    back_default: string,
                    back_female: string | null,
                    back_shiny: string,
                    back_shiny_female: string | null,
                    front_default: string,
                    front_female: string | null,
                    front_shiny: string,
                    front_shiny_female: string | null
                }
           },
           "generation-v": {
                "black-white": {
                    animated: {
                        back_default: string,
                        back_female: string | null,
                        back_shiny: string,
                        back_shiny_female: string | null,
                        front_default: string,
                        front_female: string | null,
                        front_shiny: string,
                        front_shiny_female: string | null
                    },
                    back_default: string,
                    back_female: string | null,
                    back_shiny: string,
                    back_shiny_female: string | null,
                    front_default: string,
                    front_female: string | null,
                    front_shiny: string,
                    front_shiny_female: string | null
                }
            },
            "generation-vi": {
                "omegaruby-alphasapphire": {
                    front_default: string,
                    front_female: string | null,
                    front_shiny: string,
                    front_shiny_female: string | null
                },
                "x-y": {
                    front_default: string,
                    front_female: string | null,
                    front_shiny: string,
                    front_shiny_female: string | null
                }
            },
            "generation-vii": {
                icons: {
                    front_default: string,
                    front_female: string | null
                },
                "ultra-sun-ultra-moon": {
                    front_default: string,
                    front_female: string | null,
                    front_shiny: string,
                    front_shiny_female: string | null
                }
            },
            "generation-viii": {
                icons: {
                    front_default: string,
                    front_female: string | null
                }
            }
        }
    }
    stats: {
        base_stat: number,
        effort: number,
        stat: NamedAPIResource
    }[],
    types: PokemonTypeData[],
    weight: number
}

export interface PokemonTypeData {
    slog: number,
    type: {
        name: PokemonType,
        url: string
    }
}

export interface PokemonAbility {
    ability: NamedAPIResource,
    is_hidden: boolean,
    slot: number
}

interface EvolutionDetail {
    gender: number | null;
    held_item: any | null;
    item: any | null;
    known_move: any | null;
    known_move_type: any | null;
    location: any | null;
    min_affection: any | null;
    min_beauty: any | null;
    min_happiness: any | null;
    min_level: number | null;
    needs_overworld_rain: boolean;
    party_species: any | null;
    party_type: any | null;
    relative_physical_stats: any | null;
    time_of_day: string;
    trade_species: any | null;
    trigger: {
        name: string;
        url: string;
    };
    turn_upside_down: boolean;
}

interface EvolutionChain {
    evolution_details: EvolutionDetail[];
    evolves_to: EvolutionChain[];
    is_baby: boolean;
    species: NamedAPIResource;
}

export interface EvolutionChainResponse {
    baby_trigger_item: any | null;
    chain: EvolutionChain;
    id: number;
}

export interface PokemonSpecies {
    base_happiness: number;
    capture_rate: number;
    color: NamedAPIResource;
    egg_groups: NamedAPIResource[];
    evolution_chain: {
      url: string;
    };
    evolves_from_species: NamedAPIResource | null;
    flavor_text_entries: {
      flavor_text: string;
      language: NamedAPIResource;
      version: NamedAPIResource;
    }[];
    form_descriptions: {
      description: string;
      language: NamedAPIResource;
    }[];
    forms_switchable: boolean;
    gender_rate: number;
    genera: {
      genus: string;
      language: NamedAPIResource;
    }[];
    generation: NamedAPIResource;
    growth_rate: NamedAPIResource;
    habitat: NamedAPIResource | null;
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    name: string;
    names: {
      name: string;
      language: NamedAPIResource;
    }[];
    order: number;
    pal_park_encounters: {
        entry_number: number;
        name: string;
        url: string;
    }[];
    pokedex_numbers: {
      entry_number: number;
      pokedex: NamedAPIResource;
    }[];
    shape: NamedAPIResource;
    varieties: {
      is_default: boolean;
      pokemon: NamedAPIResource;
    }[];
}
