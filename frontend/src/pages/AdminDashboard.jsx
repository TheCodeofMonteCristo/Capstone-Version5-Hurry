import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // For navigation between pages
import { getCities, deleteCity } from '../services/adminService'; // Admin service functions
import LoadingSpinner from '../components/LoadingSpinner'; // Component to display loading spinner
import { useDispatch } from 'react-redux'; // Redux hook to dispatch actions
import { setCities } from '../state/citySlice'; // Redux action to set cities in global state

const AdminDashboard = () => {
  // State variables to handle city data and loading state
  const [cities, setCitiesData] = useState([]); 
  const [loading, setLoading] = useState(true); // Loading state to manage API request status
  const [error, setError] = useState(null); // Error state to handle any issues with the API call

  const dispatch = useDispatch(); // Redux dispatch function to update the global state

  // Fetch cities from the backend on component mount
  useEffect(() => {
    // Fetch the list of cities from the backend
    const fetchCities = async () => {
      try {
        const data = await getCities(); // API call to get cities (adminService)
        setCitiesData(data); // Update local state with the fetched cities
        dispatch(setCities(data)); // Update global state with the cities data
        setLoading(false); // Set loading to false once data is fetched
      } catch (err) {
        setError('Error fetching cities'); // Set error message if the fetch fails
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchCities(); // Call the function to fetch cities
  }, [dispatch]); // Empty dependency array means this effect runs only once when the component mounts

  // Function to handle city deletion
  const handleDeleteCity = async (cityId) => {
    try {
      await deleteCity(cityId); // Call API function to delete city
      setCitiesData(cities.filter(city => city.id !== cityId)); // Remove city from local state after successful deletion
    } catch (err) {
      setError('Error deleting city'); // Set error message if deletion fails
    }
  };

  // Render loading spinner if the data is still being fetched
  if (loading) {
    return <LoadingSpinner />;
  }

  // Render error message if there was an error fetching data
  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {/* Link to add a new city */}
      <Link to="/admin/city/add" className="btn btn-primary">
        Add New City
      </Link>

      <h2>Manage Cities</h2>

      {/* Table to display list of cities */}
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cities.map(city => (
            <tr key={city.id}>
              <td>{city.name}</td>
              <td>{city.description}</td>
              <td>
                {/* Link to edit city */}
                <Link to={`/admin/city/edit/${city.id}`} className="btn btn-warning">
                  Edit
                </Link>
                {/* Button to delete city */}
                <button
                  onClick={() => handleDeleteCity(city.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
