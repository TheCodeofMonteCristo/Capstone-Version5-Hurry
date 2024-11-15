// Import React
import React, { useState } from 'react';

// ReviewForm component for submitting or editing reviews
const ReviewForm = ({ cityId, onSubmit }) => {
  // State for handling the review input
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function passed from parent with review data
    onSubmit({ review, rating });
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h3>Leave a Review</h3>
      <textarea 
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review here..."
        required
      />
      <div>
        <label htmlFor="rating">Rating:</label>
        <select 
          id="rating" 
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="1">1 - Poor</option>
          <option value="2">2 - Fair</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Very Good</option>
          <option value="5">5 - Excellent</option>
        </select>
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
