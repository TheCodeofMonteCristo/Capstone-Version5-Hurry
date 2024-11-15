import express from 'express';  // Import Express framework
import dotenv from 'dotenv';    // Import dotenv for loading environment variables
import cors from 'cors';        // Import CORS to enable cross-origin requests
import { PrismaClient } from '@prisma/client';  // Import Prisma Client to interact with the database
import morgan from 'morgan';    // Import Morgan for logging HTTP requests
import { authMiddleware, errorHandler } from './utils';  // Import custom middleware
import authRoutes from './routes/authRoutes';  // Import authentication routes
import cityRoutes from './routes/cityRoutes';  // Import city routes
import reviewRoutes from './routes/reviewRoutes';  // Import review routes
import orderRoutes from './routes/orderRoutes';  // Import order routes
import adminRoutes from './routes/adminRoutes';  // Import admin routes

dotenv.config();  // Load environment variables from .env file

const app = express();  // Create an instance of the Express app
const prisma = new PrismaClient();  // Create an instance of the Prisma Client to interact with the database

// Middlewares
app.use(cors());  // Enable CORS for cross-origin requests
app.use(express.json());  // Parse incoming JSON requests
app.use(morgan('dev'));  // Log HTTP requests in 'dev' format

// Route Handlers
app.use('/api/auth', authRoutes);  // Authentication routes for login, signup, etc.
app.use('/api/cities', cityRoutes);  // City-related routes for CRUD operations
app.use('/api/reviews', reviewRoutes);  // Routes for submitting and managing reviews
app.use('/api/orders', orderRoutes);  // Routes for managing orders
app.use('/api/admin', adminRoutes);  // Admin routes for user and city management

// Apply Authentication Middleware globally to all routes that need protection
app.use(authMiddleware);

// Global Error Handling Middleware
app.use(errorHandler);

// Connect to Prisma (Database)
prisma.$connect()
  .then(() => {
    console.log('Connected to the database successfully.');
  })
  .catch((err) => {
    console.error('Failed to connect to the database:', err);
  });

// Start the server
const port = process.env.PORT || 5000;  // Use PORT from environment variable or default to 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
