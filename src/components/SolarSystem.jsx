import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../estilos/SolarSystem.css';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="Planetas" />
        <section className="solar">
          {planets.map((planet) => (
            <PlanetCard
              planetName={ planet.name }
              planetImage={ planet.image }
              key={ planet.name }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default SolarSystem;
