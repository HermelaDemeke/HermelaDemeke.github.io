# HermelaDemeke.github.io

# MERN Portfolio Website

This project is a portfolio website built using the MERN stack (MongoDB, Express, React, Node.js). It features a responsive design optimized for both mobile and laptop views, showcasing various projects, skills, and contact information.

## Project Structure

The project is divided into two main parts: the backend and the frontend.

### Backend

The backend is built with Node.js and Express, and it handles API requests and database interactions.

- **src/app.js**: Entry point of the backend application, initializes the Express app and connects to MongoDB.
- **src/controllers/index.js**: Contains functions to handle requests related to portfolio items.
- **src/models/index.js**: Defines the Mongoose model for portfolio items.
- **src/routes/index.js**: Exports the routes for the backend application.
- **package.json**: Lists dependencies and scripts for the backend.

### Frontend

The frontend is built with React and provides the user interface for the portfolio.

- **public/index.html**: Main HTML file for the React application.
- **src/App.jsx**: Main component that sets up routing and layout.
- **src/index.js**: Entry point for the React application.
- **src/components/Navbar.jsx**: Navigation component for the portfolio site.
- **src/pages/Home.jsx**: Displays the main content of the portfolio.
- **src/styles/main.css**: CSS styles for the frontend, ensuring responsiveness.
- **package.json**: Lists dependencies and scripts for the frontend.

## Setup Instructions

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## API Endpoints

- **GET /api/portfolio**: Retrieve all portfolio items.
- **POST /api/portfolio**: Create a new portfolio item.
- **PUT /api/portfolio/:id**: Update a portfolio item by ID.
- **DELETE /api/portfolio/:id**: Delete a portfolio item by ID.

## License

This project is licensed under the MIT License.
