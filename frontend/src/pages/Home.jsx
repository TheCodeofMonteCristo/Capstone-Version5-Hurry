// Import necessary React and other modules
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CityCard from '../components/CityCard';  // Reusable component to display each city

const Home = () => {
  const [cities, setCities] = useState([]);  // State to store the list of cities
  const [loading, setLoading] = useState(true);  // State to handle the loading state

  // Fetch featured cities from the backend
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch('/api/cities/featured');
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

  // Render the homepage with featured cities
  return (
    <div className="home-page">
      <h2>Featured Cities</h2>
      {loading ? (
        <p>Loading cities...</p>
      ) : (
        <div className="city-list">
          {cities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      )}
      <Link to="/city-list" className="view-all">View All Cities</Link>
    </div>
  );
};

export default Home;
