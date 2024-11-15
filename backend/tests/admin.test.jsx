import request from 'supertest';
import app from '../server';

describe('Admin Routes Tests', () => {

  let cityId;  // Store city ID for testing

  // Test creating a city by an admin
  it('should allow admin to create a city', async () => {
    const newCity = {
      name: 'Lovecraftian Realm',
      description: 'A city with tentacles and darkness.',
      price: 500000,
    };

    const response = await request(app)
      .post('/api/admin/cities')
      .send(newCity)
      .expect(201);

    cityId = response.body.id;  // Store city ID for future admin-related actions
    expect(response.body).toHaveProperty('name', newCity.name);  // Ensure the city name is correct
  });

  // Test user deletion by an admin
  it('should allow admin to delete a user', async () => {
    const response = await request(app)
      .delete('/api/admin/users/1')  // Delete user with ID 1
      .expect(200);

    expect(response.body).toHaveProperty('message', 'User deleted');
  });

});
