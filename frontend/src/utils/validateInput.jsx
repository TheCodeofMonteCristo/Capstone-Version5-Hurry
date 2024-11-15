// validateInput.jsx - Helper function for input validation in forms

/**
 * This function validates form inputs for common fields like email, password, and required fields.
 * It checks if the fields are empty or if the email format is valid.
 *
 * @param {string} inputValue - The value of the form input to validate
 * @param {string} type - The type of validation ('email', 'password', or 'required')
 * @returns {string|null} - Returns an error message if validation fails, otherwise null
 */
const validateInput = (inputValue, type) => {
    // Check for required field validation
    if (type === 'required' && !inputValue.trim()) {
      return 'This field is required';
    }
  
    // Check for valid email format
    if (type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)) {
      return 'Please enter a valid email address';
    }
  
    // Check for password validation (at least 8 characters)
    if (type === 'password' && inputValue.length < 8) {
      return 'Password must be at least 8 characters long';
    }
  
    // If no validation errors, return null
    return null;
  };
  
  export default validateInput;
  