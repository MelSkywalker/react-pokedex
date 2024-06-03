import axios, { AxiosResponse } from "axios";
import { renderHook, waitFor } from "@testing-library/react";
import usePokemonList from "../usePokemonList";
import { PokemonListItem } from "../../../types/pokemon";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("hooks | usePokemonList", () => {
    it('fetches and returns a list of pokemon', async () => {
        const pokemonList: PokemonListItem[] = [
            { name: 'bulbasaur', url: 'url.com/bulbasaur' },
            { name: 'charmander', url: 'url.com/charmander' },
            { name: 'squirtle', url: 'url.com/squirtle' }
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
        
        const { result } = renderHook(() => usePokemonList(0, 3));
        expect(result.current.loading).toEqual(true);
        expect(result.current.pokemonList).toEqual([]);
        expect(result.current.error).toBe(null);

        await waitFor(() => {
            expect(mockedAxios.get).toHaveBeenCalled();
            expect(result.current.loading).toEqual(false);
            expect(result.current.pokemonList).toEqual(pokemonList);
            expect(result.current.error).toBe(null);
        });
    });

    it('handles errors', async () => {
        const error = new Error('Network error');
        mockedAxios.get.mockRejectedValueOnce(error);

        const { result } = renderHook(() => usePokemonList(0, 3));
        expect(result.current.loading).toEqual(true);
        expect(result.current.pokemonList).toEqual([]);
        expect(result.current.error).toBe(null);

        await waitFor(() => {
            expect(mockedAxios.get).toHaveBeenCalled();
            expect(result.current.loading).toEqual(false);
            expect(result.current.pokemonList).toEqual([]);
            expect(result.current.error).toBe(error);
        });
    });
});