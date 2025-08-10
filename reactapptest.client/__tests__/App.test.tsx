import { render, screen } from '@testing-library/react'
import App from '../src/App';

describe('App', () => {
  it('renders Weather forecast title', () => {
    render(<App />);
    expect(screen.getByText(/Weather forecast/i)).toBeInTheDocument();
  });
});
