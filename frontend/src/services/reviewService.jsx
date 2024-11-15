// reviewService.jsx - Handles API calls related to reviews

// Fetch all reviews for a specific city
export const fetchReviews = async (cityId) => {
    try {
      const response = await fetch(`/api/cities/${cityId}/reviews`);
      if (!response.ok) {
        throw new Error('Failed to fetch reviews');
      }
      return await response.json();
    } catch (error) {
      console.error('Review fetch error:', error);
      throw error;
    }
  };
  
  // Submit a new review for a specific city
  export const submitReview = async (cityId, reviewData) => {
    try {
      const response = await fetch(`/api/cities/${cityId}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit review');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Review submission error:', error);
      throw error;
    }
  };
  
  // Update an existing review for a specific city
  export const updateReview = async (cityId, reviewId, reviewData) => {
    try {
      const response = await fetch(`/api/cities/${cityId}/reviews/${reviewId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update review');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Review update error:', error);
      throw error;
    }
  };
  
  // Delete a review for a specific city
  export const deleteReview = async (cityId, reviewId) => {
    try {
      const response = await fetch(`/api/cities/${cityId}/reviews/${reviewId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete review');
      }
      return await response.json();
    } catch (error) {
      console.error('Review deletion error:', error);
      throw error;
    }
  };
  