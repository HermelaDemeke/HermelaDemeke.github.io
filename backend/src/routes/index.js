const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/index');

// Define routes for portfolio items
router.post('/portfolio', portfolioController.createPortfolioItem);
router.get('/portfolio', portfolioController.getPortfolioItems);

router.put('/portfolio/:id', portfolioController.updatePortfolioItem);
router.delete('/portfolio/:id', portfolioController.deletePortfolioItem);

module.exports = router;