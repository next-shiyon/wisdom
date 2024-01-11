import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Application page routing', () => {
  test('Should routes Main page', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Main')).toBeInTheDocument();
  });

  test('Should routes History page', async () => {
    render(
      <MemoryRouter initialEntries={['/history']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('History')).toBeInTheDocument();
  });

  test('Should routes History Create page', async () => {
    render(
      <MemoryRouter initialEntries={['/history/create']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('HistoryCreate')).toBeInTheDocument();
  });

  test('Should routes Habit Create page', async () => {
    render(
      <MemoryRouter initialEntries={['/habit/create']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Create a new habit/i)).toBeInTheDocument();
  });

  test('Should routes Login page', async () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  test('Should routes 404 not found page', async () => {
    render(
      <MemoryRouter initialEntries={['/something/wrong/url']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('404 not found')).toBeInTheDocument();
  });
});
