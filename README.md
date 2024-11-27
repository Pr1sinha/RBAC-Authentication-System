# RBAC Authentication System

This project implements an authentication and authorization system with Role-Based Access Control (RBAC). It allows users to register, log in, and access resources based on their roles (Admin, Moderator, User). The system is designed to provide secure access to resources, ensuring that only authorized users can access specific routes based on their assigned roles.

## Features:
- User registration with hashed passwords.
- JWT-based authentication for secure sessions.
- Role-based authorization for different user roles: **Admin**, **Moderator**, **User**.
- Role-based access to API endpoints.

## API Endpoints:
- **POST /api/auth/register**: Register a new user.  
  **Request Body**:  
  ```json
  {
    "username": "user1",
    "email": "user1@example.com",
    "password": "securepassword"
  }
- **POST /api/auth/login**: Login and get a JWT token.
**Request Body**:
  ```json
  {
  "email": "user1@example.com",
  "password": "securepassword"
  }
- **GET /api/roles/admin**: Access restricted to Admin users only.
**Response**:
   ```json
   "Welcome Admin"
- **GET /api/roles/moderator**: Access restricted to Admin and Moderator users.
**Response**:
  ```json
  "Welcome Moderator"
- **GET /api/roles/user**: Access restricted to authenticated users.
**Response**:
  ```json
  "Welcome User"

## Installation Instructions:

## Backend Set up: 

1. Clone this repository:
   ```bash
   git clone https://github.com/Pr1sinha/RBAC-Authentication-System.git
2. Navigate to the project's backend directory:
   ```bash
   cd RBAC-Authentication-System/backend
3. Install the dependencies:
    ```bash
    npm install
4. Set up MongoDB:
- Install MongoDB and run it locally or use a cloud-hosted MongoDB URI.
- Add a .env file in the backend root:
   ```makefile
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/rbac_db
   JWT_SECRET=mySuperSecretKey
5. Start the backend server:
   ```bash
   node server.js
The backend server will start at http://localhost:5000.

## Frontend Set up: 
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm start
  The frontend server will start at http://localhost:3000. You can open it in your browser to access the application.

## Role-Based Access Details:
- Admin: Access to /api/roles/admin, /api/roles/moderator, and /api/roles/user.
- Moderator: Access to /api/roles/moderator and /api/roles/user.
- User: Access to /api/roles/user.

## License:
This project is licensed under the MIT License.

## Acknowledgements:
- The project uses JWT (JSON Web Tokens) for user authentication.
- bcrypt is used for securely hashing passwords.
- MongoDB is used for storing user data.

 

  


  
