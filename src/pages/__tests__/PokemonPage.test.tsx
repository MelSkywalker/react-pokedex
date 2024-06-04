import { render, screen } from '@testing-library/react';
import PokemonPage from '../PokemonPage';

describe('pages | PokemonPage', () => {
  it('renders the page', () => {
    render(<PokemonPage />);
    expect(screen.getByRole('heading', { name: /Pokemon Page/i })).toBeInTheDocument();
  });
});