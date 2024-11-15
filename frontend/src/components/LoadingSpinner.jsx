// Import React
import React from 'react';

// LoadingSpinner component to display a loading animation while data is being fetched
const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
