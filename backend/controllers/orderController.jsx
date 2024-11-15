import { prisma } from '../config/db'; // Import Prisma for DB access

// Create a new order
export const createOrder = async (req, res) => {
  try {
    const { userId, cityId, quantity, totalPrice } = req.body;

    const newOrder = await prisma.order.create({
      data: {
        userId,
        cityId,
        quantity,
        totalPrice,
        status: 'pending', // Initial status
      },
    });

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all orders for a user
export const getOrdersForUser = async (req, res) => {
  try {
    const userId = req.params.userId; // Get user ID from request parameters

    const orders = await prisma.order.findMany({
      where: { userId },
    });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update the status of an order
export const updateOrderStatus = async (req, res) => {
  try {
    const orderId = parseInt(req.params.id); // Get order ID from request parameters
    const { status } = req.body;

    const updatedOrder = await prisma.order.update({
      where: { id: orderId },
      data: { status },
    });

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
