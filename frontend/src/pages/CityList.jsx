// Import necessary React modules
import React, { useState, useEffect } from 'react';
import CityCard from '../components/CityCard';  // Reusable component to display each city

const CityList = () => {
  const [cities, setCities] = useState([]);  // State to store the list of cities
  const [search, setSearch] = useState('');  // State to store search input
  const [loading, setLoading] = useState(true);  // Loading state

  // Fetch all cities when the page loads
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch('/api/cities');
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  // Filter cities based on search input
  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="city-list-page">
      <h2>All Cities</h2>
      <input
        type="text"
        placeholder="Search for a city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      {loading ? (
        <p>Loading cities...</p>
      ) : (
        <div className="city-list">
          {filteredCities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CityList;
