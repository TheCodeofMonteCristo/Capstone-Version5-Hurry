import request from 'supertest';
import app from '../server';

describe('Review CRUD Tests', () => {

  let reviewId;  // Variable to store review ID

  // Test creating a review
  it('should create a review for a city', async () => {
    const newReview = {
      cityId: 1,  // Assuming city with ID 1 exists
      content: 'Amazing city! The atmosphere is otherworldly.',
      rating: 5,
    };

    const response = await request(app)
      .post('/api/reviews')
      .send(newReview)
      .expect(201);  // Expect HTTP status 201 for creation

    reviewId = response.body.id;  // Store the review ID
    expect(response.body).toHaveProperty('rating', 5);  // Ensure the rating is correct
  });

  // Test retrieving reviews for a city
  it('should get reviews for a specific city', async () => {
    const response = await request(app)
      .get('/api/reviews/city/1')  // Get reviews for city with ID 1
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);  // Ensure there are reviews
  });

  // Test updating a review
  it('should update the review content', async () => {
    const updatedReview = {
      content: 'The city is more enchanting than ever!',
      rating: 5,
    };

    const response = await request(app)
      .put(`/api/reviews/${reviewId}`)
      .send(updatedReview)
      .expect(200);

    expect(response.body.content).toBe(updatedReview.content);  // Ensure content is updated
  });

  // Test deleting a review
  it('should delete the review', async () => {
    const response = await request(app)
      .delete(`/api/reviews/${reviewId}`)
      .expect(200);

    expect(response.body).toHaveProperty('message', 'Review deleted');  // Success message
  });

});
