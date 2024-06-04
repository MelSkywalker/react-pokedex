import { render, screen } from '@testing-library/react';
import Home from '../Home';

describe('pages | Home', () => {
  it('renders the page', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /Home/i })).toBeInTheDocument();
  });
});