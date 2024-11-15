import express from 'express';
import { createOrder, getUserOrders, updateOrderStatus } from '../controllers/orderController';  // Importing order controller functions

const router = express.Router();

// Route to create a new order (POST request to /api/orders)
router.post('/', createOrder);  // Handles creating a new order for a user

// Route to get all orders for a user (GET request to /api/orders/user/:userId)
router.get('/user/:userId', getUserOrders);  // Retrieves all orders for a specific user

// Route to update order status (PUT request to /api/orders/:id/status)
router.put('/:id/status', updateOrderStatus);  // Updates the status of a specific order

export default router;
