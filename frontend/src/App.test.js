import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders status badge', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const statusElement = screen.getByText(/open for work/i);
  expect(statusElement).toBeInTheDocument();
});
