import React from 'react';
import logo from './logo.svg';
import styles from './Header.module.css';

interface HeaderProps {
  // Define any props you want to pass to the component here
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>

      <div className={styles.search}>
        <input type="text" placeholder="Поиск" />
      </div>

      <nav className={styles.menu}>
        <ul>
          <li>
            <a href="#">Модули</a>
          </li>
          <li>
            <a href="#">Блог</a>
          </li>
          <li>
            <a href="#">О нас</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
