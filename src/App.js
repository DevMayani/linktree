import React from 'react';
import './App.css';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';

const App = () => {
  return (
    <div className='Container'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
