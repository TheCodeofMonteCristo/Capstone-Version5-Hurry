// Import the dotenv package to load environment variables from a .env file
import dotenv from 'dotenv';

// Configure dotenv to load variables from a .env file into process.env
dotenv.config();

// Log the environment to verify that the variables are being loaded
console.log('Environment loaded:', process.env.NODE_ENV);

// Example of loading environment variables
const DB_URL = process.env.DATABASE_URL;
const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT || 5000; // Default to 5000 if not set in .env

// Export variables for use in other files
export { DB_URL, JWT_SECRET, PORT };
