// store.jsx - Configures the Redux store and wraps the app with the provider

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'; // Importing Provider to wrap the app with Redux store
import { userReducer } from './userSlice'; // Importing user slice reducer
import { cityReducer } from './citySlice'; // Importing city slice reducer

// Creating the Redux store and adding slices
const store = configureStore({
  reducer: {
    user: userReducer, // User slice for managing user-related state
    city: cityReducer, // City slice for managing city-related state
  },
});

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>; // Wrapping the app in Provider
};

export { store, StoreProvider }; // Exporting store and provider to use in app
