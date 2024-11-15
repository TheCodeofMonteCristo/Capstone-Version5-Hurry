/**
 * Custom error handling middleware to catch and handle errors globally.
 */
export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);  // Log the error stack for debugging purposes
  
    const statusCode = err.statusCode || 500;  // Default to 500 for server errors
    const message = err.message || 'An unexpected error occurred.';
  
    res.status(statusCode).json({
      error: message,  // Send the error message to the client
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),  // Include stack trace in development mode
    });
  };
  