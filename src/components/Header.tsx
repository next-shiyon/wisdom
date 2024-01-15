import { IoMdLogOut } from 'react-icons/io';
import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  StyledNavigation,
} from '../styles/components/Header.styled';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { firebaseAuth } from '../api/utils';
import { useState } from 'react';

export default function Header() {
  // TODO: type 명확하게 변경하기
  const [user, setUser] = useState<any>();

  const navigation = [
    { name: 'main', link: '/' },
    { name: 'history', link: '/history' },
  ];
  onAuthStateChanged(firebaseAuth, (user) => {
    setUser(user);
  });

  const handleLogout = () => {
    signOut(firebaseAuth);
  };

  const loginStatus = () => {
    if (!user) return;

    return (
      <>
        {navigation.map((menu, index) => (
          <li key={index}>
            <Link to={menu.link}>{menu.name}</Link>
          </li>
        ))}
        <li>
          <img
            className="user-profile"
            src={user.photoURL}
            width="28px"
            height="28px"
          />
        </li>
        <li>
          <Link
            to="/login"
            data-testid="logout-icon"
            onClick={() => handleLogout()}
          >
            <IoMdLogOut />
          </Link>
        </li>
      </>
    );
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <h2>Wisdom💫</h2>
      </Link>
      <StyledNavigation>{loginStatus()}</StyledNavigation>
    </HeaderContainer>
  );
}
