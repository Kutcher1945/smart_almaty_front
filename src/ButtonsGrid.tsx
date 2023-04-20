import React from 'react';
import styles from './ButtonsGrid.module.css';
import sitcenter from './Vector.svg';
import monitoring from './Vector-1.svg';
import economy from './Vector-2.svg';
import social from './Vector-3.svg';
import startup from './Vector-4.svg';
import ecology from './Vector-5.svg';

interface ButtonGridProps {
  buttons: string[];
}

const ButtonGrid: React.FC<ButtonGridProps> = ({ buttons }) => {
  const images = [sitcenter, monitoring, economy, social, startup, ecology];

  const handleClick = (index: number) => {
    console.log(`Button ${index + 1} clicked`);
  };

  return (
    <div className={styles.container}>
      {buttons.map((label, index) => (
        <button key={index} className={styles.button} onClick={() => handleClick(index)}>
          <img src={images[index]} alt={label} className={styles.icon} />
          <span className={styles.label}>{label}</span>
        </button>
      ))}
    </div>
  );
};

export default ButtonGrid;
