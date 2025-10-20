const nodemailer = require('nodemailer');
const mailConfig = require('../config/mailConfig');

const sendMail = async (userEmail, projectDescription) => {
    const transporter = nodemailer.createTransport(mailConfig);

    const mailOptions = {
        from: userEmail,
        to: mailConfig.auth.user,
        subject: 'New Quote Request',
        text: `User Email: ${userEmail}\nProject Description: ${projectDescription}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendMail;