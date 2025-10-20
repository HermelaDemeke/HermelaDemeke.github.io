const express = require('express');
const { sendMail } = require('../mailer/sendMail');

const router = express.Router();

const setContactRoutes = (app) => {
    router.post('/contact', async (req, res) => {
        const { email, projectDescription } = req.body;

        try {
            await sendMail(email, projectDescription);
            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            res.status(500).json({ message: 'Failed to send email', error: error.message });
        }
    });

    app.use('/api', router);
};

module.exports = setContactRoutes;