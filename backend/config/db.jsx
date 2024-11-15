// Import necessary modules
import { PrismaClient } from '@prisma/client';

// Create an instance of PrismaClient for database access
const prisma = new PrismaClient();

// Define a function to connect to the database
const connectToDatabase = async () => {
  try {
    // Attempt to connect to the database
    await prisma.$connect();
    console.log('Database connected successfully');
  } catch (error) {
    // Log any errors during the connection attempt
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit the process with an error code if connection fails
  }
};

// Export the Prisma instance and the connect function
export { prisma, connectToDatabase };
