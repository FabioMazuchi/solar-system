import React from 'react';
import PropTypes from 'prop-types';

function MissionCard({ name, year, country, destination }) {
  return (
    <div key={ name } data-testid="mission-card" className="mission-card">
      <h4 data-testid="mission-name">{name}</h4>
      <p data-testid="mission-year">{year}</p>
      <p data-testid="mission-country">{country}</p>
      <p data-testid="mission-destination">{destination}</p>
    </div>
  );
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
