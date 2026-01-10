import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// Create transporter with extensive logging and timeout settings
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Must be false for port 587
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false, // Helpful for debugging connection issues
        ciphers: 'SSLv3'
    },
    logger: true, // Log information to console
    debug: true,  // Include SMTP traffic in logs
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 5000,    // 5 seconds
    socketTimeout: 10000      // 10 seconds
});

// Verify connection configuration on startup
transporter.verify(function (error, success) {
    if (error) {
        console.log("❌ Email Server Error: ", error);
    } else {
        console.log("✅ Server is ready to take our messages");
    }
});

export const sendVerificationEmail = async (to, subject, htmlContent) => {
    const mailOptions = {
        from: `"BCS Noteswala" <${process.env.SMTP_EMAIL}>`,
        to,
        subject,
        html: htmlContent,
    };

    try {
        console.log(`Attempting to send email to ${to}...`);
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully: ", info.messageId);
        return info;
    } catch (error) {
        console.error("Error sending email: ", error);
        throw error;
    }
};
