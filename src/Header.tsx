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

      <nav className={styles.menu}>
          <div className={styles.search}>
            <input type="text" placeholder="Поиск" />
          </div>
          <span>
            <a href="#">Модули</a>
          </span>
          <span>
            <a href="#">Блог</a>
          </span>
          <span>
            <a href="#">О нас</a>
          </span>
          <span>
            <a href="#">Контакты</a>
          </span>
      </nav>
    </header>
  );
}

export default Header;
