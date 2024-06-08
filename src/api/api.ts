import axios from "axios";

const API_BASE_URL = 'https://pokeapi.co/api/v2/';

async function fetchPokemonList(offset: number, limit: number) {
    const response = await axios.get(`${API_BASE_URL}pokemon`, {
        params: {
            offset,
            limit,
        }
    });
    return response.data;
}

async function fetchPokemonDataByUrl(url: string) {
    const response = await axios.get(url);
    return response.data;
}

async function fetchPokemonDataByName(name: string) {
    const response = await axios.get(`${API_BASE_URL}pokemon/${name}`);
    return response.data;
}

async function fetchPokemonSpecies(name: string) {
    const response = await axios.get(`${API_BASE_URL}pokemon-species/${name}`);
    return response.data;
}

async function fetchEvolutionChain(url: string) {
    const response = await axios.get(url);
    return response.data;
}

export { fetchPokemonList, fetchPokemonDataByUrl, fetchPokemonDataByName, fetchPokemonSpecies, fetchEvolutionChain };
