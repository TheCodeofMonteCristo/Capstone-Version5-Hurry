import request from 'supertest';  // Supertest for HTTP assertions
import app from '../server';  // Import the main app for testing

describe('Authentication Tests', () => {
  
  // Test user signup route
  it('should register a new user successfully', async () => {
    const newUser = {
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'password123',
    };
    
    const response = await request(app)
      .post('/api/auth/signup')
      .send(newUser)
      .expect(201);  // Expect HTTP status 201 for successful creation

    expect(response.body).toHaveProperty('user');  // Ensure response contains user data
    expect(response.body.user.username).toBe(newUser.username);  // Check the username
  });

  // Test user login route
  it('should log in an existing user successfully', async () => {
    const userCredentials = {
      email: 'testuser@example.com',
      password: 'password123',
    };

    const response = await request(app)
      .post('/api/auth/login')
      .send(userCredentials)
      .expect(200);  // Expect HTTP status 200 for successful login

    expect(response.body).toHaveProperty('token');  // Ensure response contains a token
    expect(response.body.token).toBeDefined();  // Token should be defined
  });

  // Test invalid login credentials
  it('should return an error for invalid login credentials', async () => {
    const invalidCredentials = {
      email: 'wronguser@example.com',
      password: 'wrongpassword',
    };

    const response = await request(app)
      .post('/api/auth/login')
      .send(invalidCredentials)
      .expect(401);  // Expect HTTP status 401 for unauthorized access

    expect(response.body).toHaveProperty('error');  // Ensure error message is returned
  });

});
