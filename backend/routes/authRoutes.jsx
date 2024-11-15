import express from 'express';
import { registerUser, loginUser } from '../controllers/authController';  // Importing controller functions for user authentication
import { validateSignup, validateLogin } from '../utils/validation';  // Importing validation middleware

const router = express.Router();

// Route for user registration (POST request to /api/auth/signup)
router.post('/signup', validateSignup, registerUser);  // Validate input first, then handle registration

// Route for user login (POST request to /api/auth/login)
router.post('/login', validateLogin, loginUser);  // Validate input first, then handle login

export default router;
