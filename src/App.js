import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Manu/Menu';
import Plagin from './components/Plagin/Plagin';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Menu />
      <Plagin />
      <Footer />
    </div>
  )
}

export default App;
