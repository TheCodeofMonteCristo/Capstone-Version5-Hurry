// Import React and other necessary components
import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);  // State to store the cart items
  const [total, setTotal] = useState(0);  // State to store the total price

  // Fetch cart items from local storage or API
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
    setTotal(items.reduce((acc, item) => acc + item.price, 0));
  }, []);

  // Remove item from the cart
  const handleRemoveItem = (itemId) => {
    const updatedItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
    setTotal(updatedItems.reduce((acc, item) => acc + item.price, 0));
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
      <div className="total">
        <h3>Total: ${total}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
