# API Documentation for Lovecraftian eCommerce

## Base URL

All API requests should be made to:

http://localhost:5000/api

csharp
Copy code

### Authentication

#### **POST /auth/signup**

Create a new user.

**Request body:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
Response:

201: User created successfully
400: Invalid input
POST /auth/login
Log in an existing user.

Request body:

json
Copy code
{
  "email": "user@example.com",
  "password": "password123"
}
Response:

200: JWT token returned
401: Invalid credentials
Cities
GET /cities
Get all available cities.

Response:

json
Copy code
[
  {
    "id": "1",
    "name": "City 1",
    "price": 1000000
  },
  {
    "id": "2",
    "name": "City 2",
    "price": 1500000
  }
]
GET /cities/
Get details of a single city.

Response:

json
Copy code
{
  "id": "1",
  "name": "City 1",
  "price": 1000000,
  "description": "A once-thriving metropolis."
}
POST /cities
Create a new city (Admin only).

Request body:

json
Copy code
{
  "name": "New City",
  "price": 2000000,
  "description": "A newly discovered city."
}
Response:

201: City created successfully
401: Unauthorized (admin required)
Reviews
POST /reviews
Submit a review for a city.

Request body:

json
Copy code
{
  "cityId": "1",
  "rating": 5,
  "comment": "Amazing city!"
}
Response:

201: Review submitted successfully
400: Invalid input
GET /reviews/
Get all reviews for a specific city.

Response:

json
Copy code
[
  {
    "rating": 5,
    "comment": "Amazing city!"
  }
]
Orders
POST /orders
Place an order for a city.

Request body:

json
Copy code
{
  "cityId": "1",
  "userId": "1",
  "quantity": 1
}
Response:

201: Order placed successfully
400: Invalid input
```
