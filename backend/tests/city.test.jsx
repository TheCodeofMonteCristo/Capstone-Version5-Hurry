import request from 'supertest'; 
import app from '../server'; 

describe('City CRUD Tests', () => {

  let cityId;  // Variable to store the ID of the city created for testing

  // Test creating a city
  it('should create a new city', async () => {
    const newCity = {
      name: 'CthulhuCity',
      description: 'A city ruled by Cthulhu.',
      price: 999999,
    };

    const response = await request(app)
      .post('/api/cities')
      .send(newCity)
      .expect(201);  // Expect HTTP status 201 for creation

    cityId = response.body.id;  // Store the city ID for future tests
    expect(response.body).toHaveProperty('name', newCity.name);  // Ensure the city name is correct
  });

  // Test retrieving all cities
  it('should retrieve all cities', async () => {
    const response = await request(app)
      .get('/api/cities')
      .expect(200);  // Expect HTTP status 200 for success

    expect(response.body).toBeInstanceOf(Array);  // Ensure the response is an array
    expect(response.body.length).toBeGreaterThan(0);  // Ensure at least one city exists
  });

  // Test updating a city
  it('should update the city description', async () => {
    const updatedCity = {
      name: 'CthulhuCity',
      description: 'A dark city ruled by Cthulhu.',
      price: 999999,
    };

    const response = await request(app)
      .put(`/api/cities/${cityId}`)
      .send(updatedCity)
      .expect(200);  // Expect HTTP status 200 for successful update

    expect(response.body.description).toBe(updatedCity.description);  // Ensure description is updated
  });

  // Test deleting a city
  it('should delete the city', async () => {
    const response = await request(app)
      .delete(`/api/cities/${cityId}`)
      .expect(200);  // Expect HTTP status 200 for successful deletion

    expect(response.body).toHaveProperty('message', 'City deleted');  // Ensure success message
  });

});
