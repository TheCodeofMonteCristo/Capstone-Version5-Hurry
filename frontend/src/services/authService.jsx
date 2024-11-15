// authService.jsx - Handles authentication-related API calls

// Function to handle user login
export const loginUser = async (credentials) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      
      if (!response.ok) {
        throw new Error('Failed to login');
      }
  
      const data = await response.json();
      // Store the token and user data in localStorage
      localStorage.setItem('authToken', data.token);
      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;  // Re-throw error to be handled in component
    }
  };
  
  // Function to handle user signup
  export const signupUser = async (userData) => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to sign up');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Signup error:', error);
      throw error;  // Re-throw error to be handled in component
    }
  };
  
  // Function to handle user logout
  export const logoutUser = () => {
    // Remove the auth token from localStorage
    localStorage.removeItem('authToken');
  };
  