import { render, screen } from "@testing-library/react";
import PokemonCard from "../PokemonCard";

describe('PokemonCard', () => {
	it('should render the PokemonCard component', () => {
        const props = {
            name: 'ditto',
            id: 135
        }

		render(<PokemonCard {...props} />);
        expect(screen.getByText('ditto')).toBeInTheDocument();
        expect(screen.getByText('135')).toBeInTheDocument();
	});
});