import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hi there link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi there/i);
  expect(linkElement).toBeInTheDocument();
});
