import { render, screen } from "@testing-library/react";
import PokemonList from "../PokemonList";
import usePokemonList from "../../hooks/usePokemonList";

jest.mock("../../hooks/usePokemonList");
const mockUsePokemonList = usePokemonList as jest.Mock;

describe('components | PokemonList', () => {
    it('renders a list of pokemon', () => {
        mockUsePokemonList.mockReturnValue({
            pokemonList: [
                { name: 'bulbasaur', url: 'url.com/bulbasaur' },
                { name: 'charmander', url: 'url.com/charmander'	},
                { name: 'squirtle', url: 'url.com/squirtle'	}
            ],
            loading: false,
            error: null
        });

        render(<PokemonList />);

        const pokemonListItems = screen.getAllByRole('listitem');
        expect(pokemonListItems).toHaveLength(3);
        expect(pokemonListItems[0]).toHaveTextContent('bulbasaur');
        expect(pokemonListItems[1]).toHaveTextContent('charmander');
        expect(pokemonListItems[2]).toHaveTextContent('squirtle');
    });

    it('renders the loading text', () => {
        mockUsePokemonList.mockReturnValue({
            pokemonList: [],
            loading: true,
            error: null
        });

        render(<PokemonList />);

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('renders the error text', () => {
        mockUsePokemonList.mockReturnValue({
            pokemonList: [],
            loading: false,
            error: { message: 'Error'}
        });

        render(<PokemonList />);

        expect(screen.getByText('Error: Error')).toBeInTheDocument();
    })
});