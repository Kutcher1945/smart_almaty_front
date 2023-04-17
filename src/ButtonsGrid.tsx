import React from 'react';
import styles from './ButtonsGrid.module.css';

interface ButtonGridProps {
  buttons: string[];
}

const ButtonGrid: React.FC<ButtonGridProps> = ({ buttons }) => {
  const handleClick = (index: number) => {
    console.log(`Button ${index + 1} clicked`);
  };

  return (
    <div className={styles.container}>
      {buttons.map((label, index) => (
        <button key={index} className={styles.button} onClick={() => handleClick(index)}>
          {label}
        </button>
      ))}
    </div>
  );
};

export default ButtonGrid;
