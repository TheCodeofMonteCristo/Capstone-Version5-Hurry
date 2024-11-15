import { prisma } from '../config/db'; // Import Prisma for DB access

// Create a new city (Admin only)
export const createCityAdmin = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    const newCity = await prisma.city.create({
      data: {
        name,
        description,
        price,
      },
    });

    res.status(201).json(newCity);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all users (Admin only)
export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany(); // Retrieve all users from the database
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
