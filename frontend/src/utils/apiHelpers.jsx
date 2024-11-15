// apiHelpers.jsx - Helper function to handle API responses and errors

/**
 * This function handles API responses. It processes the response and checks
 * for successful or failed requests. If the response is successful, it returns the data,
 * otherwise, it throws an error with a message.
 *
 * @param {Response} response - The raw response object from the API call
 * @returns {Object} - The parsed JSON data from the response
 * @throws {Error} - Throws an error if the response is not successful
 */
const handleApiResponse = async (response) => {
    if (!response.ok) {
      const errorMessage = response.statusText || 'Something went wrong with the request.';
      throw new Error(errorMessage); // Throw an error if the response was not successful
    }
    return response.json(); // Parse and return the JSON data from the response
  };
  
  /**
   * This function handles errors that occur during API calls. It logs the error
   * and returns a user-friendly message for display in the UI.
   *
   * @param {Error} error - The error object caught during the API call
   * @returns {string} - A user-friendly error message
   */
  const handleApiError = (error) => {
    console.error('API Error:', error); // Log the full error to the console for debugging
    return 'An error occurred. Please try again later.'; // Return a user-friendly error message
  };
  
  export { handleApiResponse, handleApiError };
  