import { IoMdLogIn } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './styles/HeaderContainer';
import { Navigation } from './styles/Navigation';

export default function Header() {
  const navigation = [
    { name: 'main', link: '/' },
    { name: 'history', link: '/history' },
  ];

  return (
    <HeaderContainer>
      <Link to="/">Wisdom</Link>
      <Navigation>
        {navigation.map((menu, index) => (
          <li key={index}>
            <Link to={menu.link}>{menu.name}</Link>
          </li>
        ))}
        <li>
          <Link to="/login" data-testid="login-icon">
            <IoMdLogIn />
          </Link>
        </li>
      </Navigation>
    </HeaderContainer>
  );
}
