const PortfolioItem = require('../models'); // Import the PortfolioItem model

// Create a new portfolio item
exports.createPortfolioItem = async (req, res) => {
    try {
        const newItem = new PortfolioItem(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Retrieve all portfolio items
exports.getPortfolioItems = async (req, res) => {
    try {
        const items = await PortfolioItem.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a portfolio item by ID
exports.updatePortfolioItem = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedItem = await PortfolioItem.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a portfolio item by ID
exports.deletePortfolioItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await PortfolioItem.findByIdAndDelete(id);
        if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};