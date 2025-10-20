# MERN Portfolio Backend

This project is a backend application for a portfolio website built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes a contact form that allows users to send messages, which are then emailed to the site owner using Nodemailer.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Routes](#routes)
- [Dependencies](#dependencies)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd mern-portfolio-backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the `src` directory and add your email service configuration.

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The server will run on `http://localhost:5000` (or the port specified in your `.env` file).

3. To send a contact message, make a POST request to `/api/contact` with the user's email and project description.

## Environment Variables

The following environment variables are required in the `.env` file:

```
MONGODB_URI=<your_mongodb_uri>
PORT=<your_port>
EMAIL_SERVICE=<your_email_service>
EMAIL_USER=<your_email_address>
EMAIL_PASS=<your_email_password>
```

## Routes

- **POST /api/contact**: Submits the contact form and sends an email.

## Dependencies

- `express`: Web framework for Node.js.
- `nodemailer`: Module for sending emails.
- `dotenv`: Module for loading environment variables from a `.env` file.
- `mongoose`: MongoDB object modeling tool.

## License

This project is licensed under the MIT License.