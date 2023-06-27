import { render, screen } from '@testing-library/react';
import App from './App';

it('renders the app', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // screen.debug();
  // expect(linkElement).toBeInTheDocument();
});
