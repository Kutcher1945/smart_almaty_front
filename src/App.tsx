import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import ImagePage from './ImagePage';
import ButtonGrid from './ButtonsGrid';
import backgroundImage from './mountain.png';
import './reset.css'

function App() {
  const [showLoader, setShowLoader] = useState(true);

  // Hide the loader after 2 seconds
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {showLoader && (
        <div className="loader">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      )}
      {!showLoader && (
        <>
          <Header />
          <ImagePage />
          <ButtonGrid buttons={['Ситуационный центр', 'Мониторинг районов', 'Экономика города', 'Социальная жизнь', 'Стартап экосистема', 'Экология города']} />
          {/* <div style={{backgroundColor:'red'}}></div> */}
          <img src={backgroundImage} alt="Background" className="background-image" />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
