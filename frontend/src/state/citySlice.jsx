// citySlice.jsx - Manages state related to cities

import { createSlice } from '@reduxjs/toolkit';

// Initial state for cities
const initialState = {
  cities: [], // Array to store cities
  selectedCity: null, // Store selected city for detailed view
  loading: false, // Flag to indicate if data is being loaded
  error: null, // Holds error messages if API calls fail
};

// Create slice for cities
const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    // Action to set cities after successful API fetch
    setCities: (state, action) => {
      state.cities = action.payload; // Updates cities array
      state.loading = false; // Set loading to false after data is fetched
    },
    // Action to set selected city for detailed view
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload; // Set selected city
    },
    // Action to set loading state
    setLoading: (state, action) => {
      state.loading = action.payload; // Set loading state (true/false)
    },
    // Action to set error message
    setError: (state, action) => {
      state.error = action.payload; // Store error message if an API call fails
    },
  },
});

// Export actions to use in components
export const { setCities, setSelectedCity, setLoading, setError } = citySlice.actions;

// Export reducer to be used in the store configuration
export const cityReducer = citySlice.reducer;
