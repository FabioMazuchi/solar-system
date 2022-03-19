import React from 'react';
import PropTypes from 'prop-types';

function PlanetCard({ planetName, planetImage }) {
  return (
    <div className="planet-card" key={ planetName } data-testid="planet-card">
      <h4 data-testid="planet-name">{ planetName }</h4>
      <img src={ planetImage } alt={ `Planeta ${planetName}` } />
    </div>
  );
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
