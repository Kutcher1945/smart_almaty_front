import React from 'react';
import styles from './ImagePage.module.css';
import Image from './imagemain.jpg'

const ImagePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={Image} alt="Example" className={styles.image} />
        <div className={styles.overlay}></div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Ситуационный центр Алматы</h2>
          <p className={styles.description}>
            Основной целью Ситуационного Центра города Алматы является содействие социально-экономическому развитию города Алматы с учетом <br /> лучших мировых практик. <br />
            <p></p>
          Деятельность Общества осуществляется по следующим направлениям: <br />
          <p></p>
              • Мониторинг и анализ показателей жизнедеятельности города; <br />
              • Развитие системы взаимодействия местных исполнительных органов с населением города;<br />
              • Экономическая экспертиза инвестиционных проектов и бизнес-планов государственно-частного партнерства.
            </p>
        </div>
      </div>
    </div>
  );
}

export default ImagePage;
