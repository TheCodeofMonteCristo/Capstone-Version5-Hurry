// App.jsx - Main application component, routing, and layout setup

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // React Router for navigation
import Navbar from './components/Navbar'; // Navbar component for top navigation
import Footer from './components/Footer'; // Footer component for consistent footer layout
import Home from './pages/Home'; // Homepage component for featured cities
import CityList from './pages/CityList'; // City list component with search and filter
import CityDetail from './pages/CityDetail'; // City details page with reviews
import Cart from './pages/Cart'; // Shopping cart page
import Checkout from './pages/Checkout'; // Checkout page for finalizing purchases
import Profile from './pages/Profile'; // User profile page
import AdminDashboard from './pages/AdminDashboard'; // Admin dashboard for city and user management
import './App.css'; // Importing the general styles for the app

/**
 * Main App component that contains routing and global layout.
 * It wraps the page components with a consistent layout (Navbar and Footer)
 */
const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navbar is displayed at the top of every page */}
        <Navbar />

        {/* Main content area where different pages are rendered */}
        <main>
          <Switch>
            {/* Routes for different pages */}
            <Route path="/" exact component={Home} /> {/* Homepage route */}
            <Route path="/cities" exact component={CityList} /> {/* City list route */}
            <Route path="/cities/:id" component={CityDetail} /> {/* City detail route */}
            <Route path="/cart" component={Cart} /> {/* Cart page route */}
            <Route path="/checkout" component={Checkout} /> {/* Checkout page route */}
            <Route path="/profile" component={Profile} /> {/* User profile route */}
            <Route path="/admin" component={AdminDashboard} /> {/* Admin dashboard route */}
          </Switch>
        </main>

        {/* Footer is displayed at the bottom of every page */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
