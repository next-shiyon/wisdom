import { IoMdLogIn } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function Header() {
  const menuList = [
    { name: 'main', link: '/' },
    { name: 'history', link: '/history' },
  ];

  return (
    <header>
      <ul>
        {menuList.map((menu, index) => (
          <li key={index}>
            <Link to={menu.link}>{menu.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/login" data-testid="login-icon">
        <IoMdLogIn />
      </Link>
    </header>
  );
}
