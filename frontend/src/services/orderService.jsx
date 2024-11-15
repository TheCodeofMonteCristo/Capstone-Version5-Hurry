// orderService.jsx - Handles API calls related to orders

// Place a new order
export const placeOrder = async (orderData) => {
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to place order');
      }
      return await response.json();
    } catch (error) {
      console.error('Order placement error:', error);
      throw error;
    }
  };
  
  // Fetch order details by order ID
  export const fetchOrderDetails = async (orderId) => {
    try {
      const response = await fetch(`/api/orders/${orderId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch order details');
      }
      return await response.json();
    } catch (error) {
      console.error('Order fetch error:', error);
      throw error;
    }
  };
  
  // Update an existing order
  export const updateOrder = async (orderId, orderData) => {
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update order');
      }
      return await response.json();
    } catch (error) {
      console.error('Order update error:', error);
      throw error;
    }
  };
  