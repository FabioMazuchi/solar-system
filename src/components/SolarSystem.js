import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

function SolarSystem() {
  return (
    <div data-testid="solar-system" className="solar-system">
      <Title headline="Planetas" />
      <section className="solar">
        {planets.map(({ name, image }) => (
          <PlanetCard
            planetName={ name }
            planetImage={ image }
            key={ name }
          />
        ))}
      </section>
    </div>
  );
}

export default SolarSystem;
