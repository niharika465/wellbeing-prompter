import { render, screen } from '@testing-library/react';
import App from '../app';

test('snapshot', () => {
  const { asFragment } = render(<App />);

  expect(asFragment()).toMatchSnapshot();
});

test('renders the "Take a Quiz" button', () => {
  // Render the App component
  render(<App />);

  // Check if the button is in the document
  const buttonElement = screen.getByText('Take a Quiz');
  expect(buttonElement).toBeInTheDocument();
});
