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
      {/* styled-components 를 만들면서 드는 궁금증
        1. 요소 하나하나 다 styled-components 로 만들어야 하는가..?
        2. styled-components folder structure 를 어떻게 해야할지 모르겠다
        3. flex 같은 declaration 상속으로 해결할 수 있는 방법이 있을까? (문법)
      */}
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
