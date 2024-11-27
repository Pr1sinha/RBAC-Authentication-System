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

## Installation:

1. Clone this repository:
   ```bash
   git clone https://github.com/Pr1sinha/RBAC-Authentication-System.git
2. Navigate to the project directory:
   ```bash
   cd RBAC-Authentication-System
3. Install the dependencies:
    ```bash
    npm install
4. Create a .env file in the root of the project and add the following environment variables:
   ```makefile
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/rbac_db
   JWT_SECRET=mySuperSecretKey
5. Start the server:
   ```bash
   node server.js
   
## License:
This project is licensed under the MIT License.

## Acknowledgements:
- The project uses JWT (JSON Web Tokens) for user authentication.
- bcrypt is used for securely hashing passwords.
- MongoDB is used for storing user data.

 

  


  
