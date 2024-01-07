import { Outlet } from 'react-router-dom';
import Header from '../header';
import { GlobalStyles } from '../../styles/globals/Global';

export default function Layout() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Outlet />
    </>
  );
}
