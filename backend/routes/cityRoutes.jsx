import express from 'express';
import { createCity, getCities, getCity, updateCity, deleteCity } from '../controllers/cityController';  // Importing controller functions for city operations
import { validateCity } from '../utils/validation';  // Importing validation for city data

const router = express.Router();

// Route to create a new city (POST request to /api/cities)
router.post('/', validateCity, createCity);  // Validate input first, then handle city creation

// Route to get all cities (GET request to /api/cities)
router.get('/', getCities);  // Retrieves the list of all cities

// Route to get a single city by ID (GET request to /api/cities/:id)
router.get('/:id', getCity);  // Retrieves a specific city by its ID

// Route to update a city by ID (PUT request to /api/cities/:id)
router.put('/:id', validateCity, updateCity);  // Validate input first, then handle city update

// Route to delete a city by ID (DELETE request to /api/cities/:id)
router.delete('/:id', deleteCity);  // Deletes a specific city by its ID

export default router;
