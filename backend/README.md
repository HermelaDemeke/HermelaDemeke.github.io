# Backend Portfolio API

This is the backend for the portfolio website built using the MERN stack. It provides a RESTful API to manage portfolio items.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd mern-portfolio/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up your environment variables (e.g., MongoDB connection string) in a `.env` file.

## Usage

To start the server, run:
```
npm start
```

The server will run on `http://localhost:5000` by default.

## API Endpoints

- `GET /api/portfolio` - Retrieve all portfolio items
- `POST /api/portfolio` - Create a new portfolio item
- `PUT /api/portfolio/:id` - Update a portfolio item by ID
- `DELETE /api/portfolio/:id` - Delete a portfolio item by ID

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv (for environment variables)