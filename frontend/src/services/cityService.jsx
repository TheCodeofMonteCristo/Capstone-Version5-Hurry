// cityService.jsx - Handles API calls related to city operations

// Fetch a list of all cities
export const fetchCities = async () => {
    try {
      const response = await fetch('/api/cities');
      if (!response.ok) {
        throw new Error('Failed to fetch cities');
      }
      return await response.json();
    } catch (error) {
      console.error('City fetch error:', error);
      throw error;  // Re-throw error to be handled in component
    }
  };
  
  // Fetch a specific city's details
  export const fetchCityDetails = async (id) => {
    try {
      const response = await fetch(`/api/cities/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch city details');
      }
      return await response.json();
    } catch (error) {
      console.error('City details fetch error:', error);
      throw error;
    }
  };
  
  // Create a new city (admin functionality)
  export const createCity = async (cityData) => {
    try {
      const response = await fetch('/api/cities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cityData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create city');
      }
      return await response.json();
    } catch (error) {
      console.error('Create city error:', error);
      throw error;
    }
  };
  
  // Update a city's details (admin functionality)
  export const updateCity = async (id, cityData) => {
    try {
      const response = await fetch(`/api/cities/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cityData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update city');
      }
      return await response.json();
    } catch (error) {
      console.error('Update city error:', error);
      throw error;
    }
  };
  
  // Delete a city (admin functionality)
  export const deleteCity = async (id) => {
    try {
      const response = await fetch(`/api/cities/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete city');
      }
      return await response.json();
    } catch (error) {
      console.error('Delete city error:', error);
      throw error;
    }
  };
  