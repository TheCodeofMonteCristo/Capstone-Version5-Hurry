import express from 'express';
import { createReview, getReviews, updateReview, deleteReview } from '../controllers/reviewController';  // Importing review controller functions
import { validateReview } from '../utils/validation';  // Importing validation for review data

const router = express.Router();

// Route to create a new review (POST request to /api/reviews)
router.post('/', validateReview, createReview);  // Validate input first, then handle review creation

// Route to get all reviews for a specific city (GET request to /api/reviews/city/:cityId)
router.get('/city/:cityId', getReviews);  // Retrieves all reviews for a specific city

// Route to update a review by ID (PUT request to /api/reviews/:id)
router.put('/:id', validateReview, updateReview);  // Validate input first, then handle review update

// Route to delete a review by ID (DELETE request to /api/reviews/:id)
router.delete('/:id', deleteReview);  // Deletes a specific review by ID

export default router;
