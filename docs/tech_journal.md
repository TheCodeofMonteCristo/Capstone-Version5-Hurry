# Tech Journal for Lovecraftian eCommerce Project

## Day 1 - Project Setup

- Initialized the project repo and created the basic folder structure.
- Decided on using Node.js and Express for the backend, and React for the frontend.
- Set up Prisma for database management with MongoDB.

## Day 2 - Authentication and User Management

- Completed the authentication system using JWT for secure login and signup.
- Implemented middleware for protected routes (admin-only).
- Started working on user registration and login API endpoints.

## Day 3 - Cities and Reviews

- Created the **City** model in Prisma and implemented city CRUD operations.
- Started implementing the review system where users can rate cities.
- Integrated both the frontend and backend for city management (add, update, delete).

## Day 4 - Shopping Cart and Checkout

- Implemented the shopping cart functionality, allowing users to add cities to their cart.
- Started working on the checkout page for order placement.
- Integrated Stripe for payment processing.

## Day 5 - Testing and Bug Fixes

- Began writing unit tests for the backend API using Jest and Supertest.
- Fixed various minor bugs in the frontend, such as incorrect price formatting.

---

### **4. Wireframes (Folder: `wireframes/`)**

This folder contains design mockups for various pages of the website.

- **`HomePage.png`**: Wireframe for the homepage showing featured cities and basic navigation.
- **`CityDetail.png`**: Wireframe for the city detail page showing city information and reviews.
- **`CartPage.png`**: Wireframe for the shopping cart page showing added cities and the checkout button.

---

### **Explanation**:

- **`README.md`** provides an overview of the project, its goals, technologies, and setup instructions for developers to get the project running locally.
- **`API_Documentation.md`** outlines all the available API endpoints, request and response formats, and necessary details for interacting with the backend. This is essential for frontend-backend communication and for anyone looking to extend or integrate with the API.
- **`tech_journal.md`** tracks the progress of the project, documenting key decisions, progress, and problems encountered. This journal serves as a log of development activities and is useful for reflecting on the development process.
- **`wireframes/`** folder contains design mockups that visually represent how the different pages of the website are structured, helping to align the design with the implementation.

These documentation files ensure that developers, designers, and other stakeholders have a clear understanding of how the project is structured, how to work with it, and how to interact with the backend.
