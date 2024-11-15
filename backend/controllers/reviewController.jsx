import { prisma } from '../config/db'; // Import Prisma instance for database access

// Add a new review
export const addReview = async (req, res) => {
  try {
    const { cityId, userId, rating, comment } = req.body;

    const newReview = await prisma.review.create({
      data: {
        cityId,
        userId,
        rating,
        comment,
      },
    });

    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all reviews for a city
export const getReviewsForCity = async (req, res) => {
  try {
    const cityId = parseInt(req.params.cityId); // Get city ID from request parameters

    const reviews = await prisma.review.findMany({
      where: { cityId },
    });

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a review
export const updateReview = async (req, res) => {
  try {
    const reviewId = parseInt(req.params.id); // Get review ID from request parameters
    const { rating, comment } = req.body;

    const updatedReview = await prisma.review.update({
      where: { id: reviewId },
      data: { rating, comment },
    });

    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a review
export const deleteReview = async (req, res) => {
  try {
    const reviewId = parseInt(req.params.id); // Get review ID from request parameters

    await prisma.review.delete({
      where: { id: reviewId },
    });

    res.status(200).json({ message: 'Review deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
