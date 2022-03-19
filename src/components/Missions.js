import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

function Missions() {
  return (
    <div data-testid="missions" className="missions">
      <Title headline="Missões" />
      <section className="missions-section">
        {missions.map(({ name, year, country, destination }) => (
          <MissionCard
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
            key={ name }
          />
        ))}
      </section>
    </div>
  );
}

export default Missions;
