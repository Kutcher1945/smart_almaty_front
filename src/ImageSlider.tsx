import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './ImageSlider.module.css';

interface ImageSliderProps {
  images: Array<{
    src: string;
    alt: string;
    title: string;
    description: string;
  }>;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true // add this setting
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider className={styles.slider} {...settings}>
        {images.map((image, index) => (
          <div className={styles.slide} key={index}>
            <img src={image.src} alt={image.alt} className={styles.image} />
            <div className={styles.text}>
              <h2>{image.title}</h2>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
