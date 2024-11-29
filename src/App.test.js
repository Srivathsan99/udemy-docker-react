import { render, screen } from '@testing-library/react';
import { act } from 'react';
import App from './App';

// ------------------- 1st error: -------------------
test('renders Hi there link', () => {
  act(() => {
    render(<App />);
  });
  const linkElement = screen.getByText(/Hi there/i); // Updated matcher
  expect(linkElement).toBeInTheDocument();
});

// ------------------- WORKING PART -------------------
  
////  'RUN npm install @testing-library/react@latest' was added to the dockerfile
// test('renders Hi there link', () => {
// render(<App />); // No need for explicit act
//   const linkElement = screen.getByText(/Hi there/i);
//   expect(linkElement).toBeInTheDocument();
// });
