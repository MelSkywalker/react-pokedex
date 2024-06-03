import axios, { AxiosResponse } from "axios";
import { fetchPokemonList } from "../api";
import { PokemonListItem } from '../../types/pokemon';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('API', () => {
    it('should fetch pokemon list', async () => {
        const pokemonList: PokemonListItem[] = [
            { name: 'bulbasaur', url: 'url.com/bulbasaur' },
            { name: 'charmander', url: 'url.com/charmander'	},
            { name: 'squirtle', url: 'url.com/squirtle'	}
        ];

        const mockedResponse: AxiosResponse = {
            data: {
                results: pokemonList
            },
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {}
        };

        mockedAxios.get.mockResolvedValueOnce(mockedResponse);
        const data = await fetchPokemonList(0, 3);
        expect(data.results).toEqual(pokemonList);
        expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    })
});