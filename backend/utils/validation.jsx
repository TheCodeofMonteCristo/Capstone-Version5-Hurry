import { body, validationResult } from 'express-validator';  // express-validator for input validation

/**
 * Middleware function to validate user registration input.
 * Validates the email and password fields.
 */
export const validateUserRegistration = [
  body('email').isEmail().withMessage('Please provide a valid email address.'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password should be at least 6 characters long.'),
  
  // Check if there are validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });  // Return validation errors
    }
    next();  // Proceed to the next middleware or route handler
  },
];

/**
 * Middleware function to validate city creation input.
 * Ensures that the name, description, and price fields are valid.
 */
export const validateCityCreation = [
  body('name').notEmpty().withMessage('City name is required.'),
  body('description').notEmpty().withMessage('City description is required.'),
  body('price').isNumeric().withMessage('Price must be a number.'),

  // Check if there are validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });  // Return validation errors
    }
    next();  // Proceed to the next middleware or route handler
  },
];

/**
 * Middleware function to validate review input.
 * Ensures that content and rating fields are provided correctly.
 */
export const validateReview = [
  body('content').notEmpty().withMessage('Review content is required.'),
  body('rating')
    .isInt({ min: 1, max: 5 })
    .withMessage('Rating must be an integer between 1 and 5.'),

  // Check if there are validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });  // Return validation errors
    }
    next();  // Proceed to the next middleware or route handler
  },
];
