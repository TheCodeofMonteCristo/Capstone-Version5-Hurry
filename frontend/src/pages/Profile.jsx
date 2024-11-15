import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Redux hooks to dispatch actions and access global state
import { getUserProfile, updateUserProfile } from '../services/authService'; // Functions for profile handling
import { setUser } from '../state/userSlice'; // Redux action to update the user in global state
import { useHistory } from 'react-router-dom'; // For navigation (redirecting the user after profile update)

const Profile = () => {
  // State variables to manage form input values, loading state, and error message
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true); // Loading state for fetching the user profile
  const [error, setError] = useState(null); // Error state for displaying error messages

  // Redux state to get user information (e.g., if the user is logged in)
  const user = useSelector(state => state.user);
  const dispatch = useDispatch(); // Dispatch function to update the global state
  const history = useHistory(); // For redirecting to another page after profile update

  // Fetch the user profile on component mount (initial load)
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await getUserProfile(); // Get user profile from backend
        setUsername(userProfile.username); // Set username from the response
        setEmail(userProfile.email); // Set email from the response
        setLoading(false); // Set loading to false once the data is fetched
      } catch (err) {
        setError('Error fetching user profile'); // Handle any errors while fetching
        setLoading(false); // Set loading to false in case of error
      }
    };

    if (user?.id) {
      fetchUserProfile(); // Only fetch profile if user is logged in (user ID exists)
    } else {
      setError('You need to be logged in to view this page'); // Error if no user is logged in
      setLoading(false); // Stop loading in case of error
    }
  }, [user]); // Dependency on `user` state, so it runs when the user logs in

  // Handle form submission (updating the user profile)
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    setLoading(true); // Set loading state to true while updating profile

    try {
      const updatedUser = await updateUserProfile({ username, email, password }); // Call API to update profile
      dispatch(setUser(updatedUser)); // Update the global user state with the new user info
      history.push('/profile'); // Redirect to the profile page after updating
    } catch (err) {
      setError('Error updating profile'); // Handle any errors during profile update
      setLoading(false); // Stop loading in case of error
    }
  };

  // Render loading spinner if data is still being fetched
  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  // Render error message if there is an error
  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="profile">
      <h1>Profile</h1>
      
      {/* Profile Update Form */}
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        {/* Submit button to update the profile */}
        <button type="submit" className="btn btn-primary">Update Profile</button>
      </form>

      {/* Link to redirect back to the home page or other relevant pages */}
      <div className="back-link">
        <a href="/home">Back to Home</a>
      </div>
    </div>
  );
};

export default Profile;
