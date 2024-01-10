import { Outlet } from 'react-router-dom';
import Header from '../header';
import { GlobalStyles } from '../../styles/Global.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { MainContainer } from '../../styles/MainContainer.styled';

export default function Layout() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <MainContainer>
          <Outlet />
        </MainContainer>
      </ThemeProvider>
    </>
  );
}
