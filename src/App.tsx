import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import { privateRoutes, publicRoutes } from './routes';
import { firebaseAuth } from './api/utils';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';

export default function App() {
  const [user, setUser] = useState<any>();

  onAuthStateChanged(firebaseAuth, (user) => {
    setUser(user);
  });

  const conditionalRoutes = () => {
    const routes = user !== null ? privateRoutes : publicRoutes;

    return routes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element} />
    ));
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {conditionalRoutes()}
      </Route>
    </Routes>
  );
}
