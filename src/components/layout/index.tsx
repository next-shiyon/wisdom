import { Outlet } from 'react-router-dom';
import Header from '../header';
import { GlobalStyles } from '../../styles/Global.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

export default function Layout() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
}
