import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import ImagePage from './ImagePage';
import ButtonGrid from './ButtonsGrid';
import backgroundImage from './header.jpg';
import './reset.css'

function App() {
  return (
    <div className="App">
      <Header />
      <ImagePage />
      <ButtonGrid buttons={['Ситуационный центр', 'Мониторинг районов', 'Экономика города', 'Социальная жизнь', 'Стартап экосистема', 'Экология города']} />
      <div style={{backgroundColor:'white'}}></div>
      <Footer />
    </div>
  );
}

export default App;
