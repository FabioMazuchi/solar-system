import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import './estilos/App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <SolarSystem />
      <Missions />
      <Footer />
    </div>
  );
}

export default App;
