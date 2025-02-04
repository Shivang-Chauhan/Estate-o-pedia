# EstateEcho

## Project Overview

EstateEcho is a comprehensive real estate web application built with the MERN stack (MongoDB, Express.js, React, and Node.js). This application provides a platform for users to explore, manage, and interact with real estate listings efficiently. Whether you are looking to buy or sell a property, EstateEcho offers a seamless and user-friendly experience.

## Table of Contents

1. [Features](#features)
2. [Screenshots](#screenshots)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Endpoints](#api-endpoints)
6. [Technologies Used](#technologies-used)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

## Features

- User Authentication: Sign up, log in, and manage user accounts.
- Property Listings: View, search, and filter real estate properties.
- Property Management: Add, edit, and delete property listings (for authenticated users).
- Property Details: Detailed view of each property with images, descriptions, and pricing.
- Inquiries: Make and manage inquiries on properties by directly contacting the owner using real time chat functionality.
- Responsive Design: Optimized for both desktop and mobile devices.


## Screenshots

### Home Page
<img width="1440" alt="Screenshot 2024-07-18 at 6 40 48 PM" src="https://github.com/user-attachments/assets/3f9f9416-c6e1-4b48-8dcd-c224976b8aef">

### Property Listings
<img width="1439" alt="Screenshot 2024-07-18 at 7 03 10 PM" src="https://github.com/user-attachments/assets/1ec6fcbf-ee08-442d-a5eb-2ff8b5be3c0f">

### Property Details
<img width="1440" alt="Screenshot 2024-07-18 at 7 01 51 PM" src="https://github.com/user-attachments/assets/23fd64a4-6ae9-4a43-b4ed-b23409e96543">

### Add Property
<img width="1440" alt="Screenshot 2024-07-18 at 6 43 55 PM" src="https://github.com/user-attachments/assets/fbd9f372-5526-4095-a613-2c1f86a3f5f2">

### User Login
<img width="1439" alt="Screenshot 2024-07-18 at 6 44 23 PM" src="https://github.com/user-attachments/assets/4c3e8a3e-07ed-4289-9f7f-01fab85c44be">



## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Shivang-Chauhan/EstateEcho.git
   cd EstateEcho
   ```

2. **Install server dependencies:**

   ```bash
   cd api
   npm install
   ```

3. **Install client dependencies:**

   ```bash
   cd client
   npm install
   ```
   
4. **Install socket dependencies:**

   ```bash
   cd socket
   npm install
   ```

5. **Set up environment variables:**

   Create a `.env` file in the `api` directory and add the following:

   ```plaintext
   DATABASE_URL=your_mongodb_uri
   JWT_SECRET_KEY=your_jwt_secret
   CLIENT_URL=your_client_url
   ```

6. **Run the server:**

   ```bash
   cd api
   nodemon app.js
   ```

7. **Run the socket:**

   ```bash
   cd socket
   nodemon app.js
   ```

8. **Run the client:**

   ```bash
   cd client
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:5173` to access the application.
2. Sign up for a new account or log in with an existing account.
3. Browse available properties, search using filters, and view property details.
4. For property sellers, add new property listings, edit existing listings, or delete listings.

## API Endpoints

### User Authentication

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in an existing user.
- **POST /api/auth/logout**: Log out an existing user.

### User Profile Management

- **GET /api/users/**: Get all users.
- **PUT /api/users/:id**: Update user's password and details (authenticated users only).
- **DELETE /api/users/:id**: Delete user's profile (authenticated users only).
- **POST /api/users/save**: Save a post (authenticated users only).
- **GET /api/users/profilePosts**: Get profile posts (authenticated users only).
- **GET /api/users/notification**: Get notifications number on user's profile (authenticated users only).

### Posts Management

- **GET /api/posts/**: Get all posts.
- **GET /api/posts/:id**: Get a post by ID.
- **POST /api/posts/**: Add a new post by ID (authenticated users only).
- **PUT /api/posts/:id**: Update a post by ID (authenticated users only).
- **DELETE /api/posts/:id**: Delete a post by ID (authenticated users only).

### Chat Management

- **GET /api/chats/**: Get all chats (authenticated users only).
- **GET /api/chats/:id**: Get chat by ID (authenticated users only).
- **POST /api/chats/**: Add a chat (authenticated users only).
- **PUT /api/chats/read/:id**: Read a chat by ID (authenticated users only).

### Messages Management

- **POST /api/messages/:chatId**: Add a message by chatID (authenticated users only).

## Technologies Used

- **Frontend**: React, HTML, SCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Prisma(ORM)
- **Authentication**: JWT (JSON Web Tokens)
- **Others**: Cloudinary (for image upload), Bcrypt (for password hashing), Socket.io(for real-time chatting functionality).

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or questions, please contact:

- Shivang Chauhan - [chauhanshivang012@gmail.com](mailto:chauhanshivang012@gmail.com)

---

Thank you for using EstateEcho! We hope it meets your real estate needs.
