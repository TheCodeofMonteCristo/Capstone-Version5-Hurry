// userSlice.jsx - Manages state related to user authentication

import { createSlice } from '@reduxjs/toolkit';

// Initial state for user authentication
const initialState = {
  isAuthenticated: false, // Flag to check if user is authenticated
  user: null, // User data (will be populated after login/signup)
  token: null, // Auth token for secure API requests
};

// Create slice for user authentication
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to set user data after successful login/signup
    setUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    // Action to clear user data and reset state (logout)
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
});

// Export actions to use in components
export const { setUser, logout } = userSlice.actions;

// Export reducer to be used in the store configuration
export const userReducer = userSlice.reducer;
