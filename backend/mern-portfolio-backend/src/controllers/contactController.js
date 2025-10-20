const nodemailer = require('nodemailer');
require('dotenv').config();

const sendContactEmail = async (req, res) => {
    const { email, projectDescription } = req.body;

    if (!email || !projectDescription) {
        return res.status(400).json({ message: 'Email and project description are required.' });
    }

    const transporter = nodemailer.createTransport({
        service: 'Gmail', // or your email service
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // send to yourself or another email
        subject: 'New Contact Form Submission',
        text: `You have received a new message from ${email}:\n\n${projectDescription}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email.' });
    }
};

module.exports = { sendContactEmail };