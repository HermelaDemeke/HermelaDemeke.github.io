const express = require('express');
const { sendContactEmail } = require('../controllers/contactController');

const router = express.Router();

// Route to handle contact form submission
router.post('/', sendContactEmail);

module.exports = router;