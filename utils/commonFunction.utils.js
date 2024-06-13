const nodemailer = require("nodemailer");

async function sendEmail(name, email, message) {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD
            }
        });
        const mailOptions = {
            from: `${name} <${email}>`,
            to: process.env.SMTP_EMAIL,
            subject: 'Inquiry About Development Services',
            text: `Dear Krupan,`,
            html: `
            <p>${message}</p>

            <p>Best regards,</p>
            <p><b>${name}</b></p>`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                throw error
            } else {
                console.log("Mail sent Sucessfully")
            }
        });
    } catch (error) {
        throw error;
    }
}

module.exports = { sendEmail }