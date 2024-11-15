// Import React and necessary components
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';  // Reusable review form component
import LoadingSpinner from '../components/LoadingSpinner';  // Spinner component for loading state

const CityDetail = () => {
  const { id } = useParams();  // Get city ID from the URL params
  const [city, setCity] = useState(null);  // State to store the city details
  const [reviews, setReviews] = useState([]);  // State to store the reviews
  const [loading, setLoading] = useState(true);  // Loading state

  // Fetch city details and reviews based on the city ID
  useEffect(() => {
    const fetchCityDetails = async () => {
      try {
        const response = await fetch(`/api/cities/${id}`);
        const data = await response.json();
        setCity(data.city);
        setReviews(data.reviews);
      } catch (error) {
        console.error("Error fetching city details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCityDetails();
  }, [id]);

  // Handle review submission
  const handleReviewSubmit = (reviewData) => {
    setReviews([reviewData, ...reviews]);  // Add the new review to the top of the list
  };

  return (
    <div className="city-detail-page">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h2>{city.name}</h2>
          <img src={city.imageUrl} alt={city.name} />
          <p>{city.description}</p>

          <h3>Reviews</h3>
          <div className="reviews">
            {reviews.map((review, index) => (
              <div key={index} className="review">
                <p>{review.text}</p>
                <p>Rating: {review.rating} stars</p>
              </div>
            ))}
          </div>

          <ReviewForm cityId={id} onSubmit={handleReviewSubmit} />
        </>
      )}
    </div>
  );
};

export default CityDetail;
