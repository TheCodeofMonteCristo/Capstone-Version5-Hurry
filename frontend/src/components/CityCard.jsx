// Import React
import React from 'react';
import { Link } from 'react-router-dom';  // For linking to city details

// CityCard component to display a city in a card format
const CityCard = ({ city }) => {
  return (
    <div className="city-card">
      <img src={city.imageUrl} alt={city.name} className="city-image" />
      <h3>{city.name}</h3>
      <p>{city.description}</p>
      <Link to={`/city-detail/${city.id}`} className="view-details">View Details</Link>
    </div>
  );
};

export default CityCard;
