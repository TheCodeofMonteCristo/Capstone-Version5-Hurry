// index.jsx - The entry point for rendering the React application

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the main App component
import './index.css'; // Import global styles for the app
import { Provider } from 'react-redux'; // Redux provider for state management
import store from './state/store'; // Redux store for managing global state

/**
 * The index file serves as the entry point for React to render the app in the DOM.
 * It wraps the app in a Redux provider to manage global state.
 */
ReactDOM.render(
  <Provider store={store}> {/* Wrap the App in the Redux Provider */}
    <App /> {/* The main App component containing routes and layout */}
  </Provider>,
  document.getElementById('root') // The root div in index.html where the app is mounted
);
