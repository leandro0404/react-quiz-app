import React from 'react';
import './App.css';
import Proof from './components/proof/Proof'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Proof/>
      <Footer/>
    </div>
  );
}

export default App;
