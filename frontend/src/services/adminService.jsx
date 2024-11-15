// adminService.jsx - Handles admin-specific API calls

// Fetch a list of all users (admin functionality)
export const fetchUsers = async () => {
    try {
      const response = await fetch('/api/admin/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      return await response.json();
    } catch (error) {
      console.error('User fetch error:', error);
      throw error;
    }
  };
  
  // Fetch a list of all cities (admin functionality)
  export const fetchAllCities = async () => {
    try {
      const response = await fetch('/api/admin/cities');
      if (!response.ok) {
        throw new Error('Failed to fetch cities');
      }
      return await response.json();
    } catch (error) {
      console.error('City fetch error:', error);
      throw error;
    }
  };
  
  // Delete a user (admin functionality)
  export const deleteUser = async (userId) => {
    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      return await response.json();
    } catch (error) {
      console.error('User deletion error:', error);
      throw error;
    }
  };
  