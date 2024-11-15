import jwt from 'jsonwebtoken';  // JSON Web Token library to verify tokens
import dotenv from 'dotenv';     // To load environment variables securely

dotenv.config();  // Load environment variables from .env file

/**
 * Middleware to check if the user is authenticated.
 * It checks for a valid JWT in the authorization header of the request.
 */
export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];  // Get the token from the Authorization header (Bearer <token>)

  if (!token) {
    return res.status(403).json({ error: 'Access denied. No token provided.' });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token.' });
    }
    
    req.user = decoded;  // Attach the decoded token (user information) to the request object
    next();  // Proceed to the next middleware or route handler
  });
};

/**
 * Middleware to check if the user is an admin.
 * Used for routes that require admin privileges.
 */
export const adminMiddleware = (req, res, next) => {
  // Check if the user has an admin role
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied. Admins only.' });
  }
  next();  // Proceed to the next middleware or route handler
};
