import { prisma } from '../config/db'; // Import Prisma instance for interacting with the database

// Get all cities
export const getCities = async (req, res) => {
  try {
    const cities = await prisma.city.findMany(); // Retrieve all cities from the database
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a specific city by ID
export const getCityById = async (req, res) => {
  try {
    const cityId = parseInt(req.params.id); // Get city ID from request parameters

    const city = await prisma.city.findUnique({
      where: { id: cityId },
    });

    if (!city) {
      return res.status(404).json({ message: 'City not found' });
    }

    res.status(200).json(city);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new city
export const createCity = async (req, res) => {
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

// Update an existing city
export const updateCity = async (req, res) => {
  try {
    const cityId = parseInt(req.params.id); // Get city ID from request parameters
    const { name, description, price } = req.body;

    const updatedCity = await prisma.city.update({
      where: { id: cityId },
      data: {
        name,
        description,
        price,
      },
    });

    res.status(200).json(updatedCity);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a city
export const deleteCity = async (req, res) => {
  try {
    const cityId = parseInt(req.params.id); // Get city ID from request parameters

    const deletedCity = await prisma.city.delete({
      where: { id: cityId },
    });

    res.status(200).json({ message: 'City deleted', deletedCity });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
