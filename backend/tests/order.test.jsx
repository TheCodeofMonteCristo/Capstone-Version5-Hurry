import request from 'supertest';
import app from '../server';

describe('Order Tests', () => {

  let orderId;  // Variable to store order ID

  // Test creating an order
  it('should create a new order', async () => {
    const newOrder = {
      userId: 1,  // Assuming user with ID 1 exists
      cityId: 1,  // Assuming city with ID 1 exists
      quantity: 1,
      total: 999999,
    };

    const response = await request(app)
      .post('/api/orders')
      .send(newOrder)
      .expect(201);

    orderId = response.body.id;  // Store the order ID
    expect(response.body).toHaveProperty('total', newOrder.total);  // Check the total
  });

  // Test getting orders by user
  it('should retrieve orders for a user', async () => {
    const response = await request(app)
      .get('/api/orders/user/1')  // Get orders for user with ID 1
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);  // Ensure response is an array
  });

  // Test updating order status
  it('should update the order status', async () => {
    const updatedStatus = { status: 'shipped' };

    const response = await request(app)
      .put(`/api/orders/${orderId}/status`)
      .send(updatedStatus)
      .expect(200);

    expect(response.body.status).toBe(updatedStatus.status);  // Ensure the status is updated
  });

});
