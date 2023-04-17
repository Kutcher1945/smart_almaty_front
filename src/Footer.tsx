import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  // Define any props you want to pass to the component here
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul>
            <a>&copy; 2023 Cитуационный центр Алматы. Все права защищены.</a>
        </ul>
      </nav>

      <div>
        <a></a>
      </div>
    </footer>
  );
}

export default Footer;
