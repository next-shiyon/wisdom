import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from '../../App';

describe('Header menu UI', () => {
  test('renders header menu', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByText('main')).toBeInTheDocument();
    expect(screen.getByText('history')).toBeInTheDocument();
    expect(screen.getByTestId('login-icon')).toBeInTheDocument();
  });
});

describe('Check the operation of the Header menu', () => {
  test('Should redirects Login page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('login-icon')).toHaveAttribute('href', '/login');
  });

  test('Should redirects Main page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: 'main' })).toHaveAttribute(
      'href',
      '/'
    );
  });

  test('Should redirects History page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: 'history' })).toHaveAttribute(
      'href',
      '/history'
    );
  });
});
