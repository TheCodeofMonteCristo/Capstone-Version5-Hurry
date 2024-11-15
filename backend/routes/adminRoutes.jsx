import express from 'express';
import { getAllUsers, deleteUser, getAllCities } from '../controllers/adminController';  // Importing admin controller functions

const router = express.Router();

// Route to get all users (GET request to /api/admin/users)
router.get('/users', getAllUsers);  // Retrieves all users in the system

// Route to delete a user (DELETE request to /api/admin/users/:id)
router.delete('/users/:id', deleteUser);  // Deletes a specific user by ID

// Route to get all cities (GET request to /api/admin/cities)
router.get('/cities', getAllCities);  // Retrieves all cities in the system

export default router;
