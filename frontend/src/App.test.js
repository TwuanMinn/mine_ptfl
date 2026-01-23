import { render, act } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

// Mock all visual/canvas components
jest.mock('./components/common/LoadingScreen.jsx', () => function MockLoading() { return null; });
jest.mock('./components/common/CustomCursor.jsx', () => function MockCursor() { return null; });
jest.mock('./components/common/ScrollProgress.jsx', () => function MockScroll() { return null; });

// Mock lazy imports (must return object with default property)
jest.mock('./components/common/ParticleBackground', () => {
  return {
    __esModule: true,
    default: () => null
  };
});
jest.mock('./components/common/StatusBadge.jsx', () => {
  return {
    __esModule: true,
    default: () => null
  };
});

test('renders app without crashing', async () => {
  await act(async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
  // If we get here without error, the app rendered successfully
  expect(true).toBe(true);
});
