import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  // Configure your email service provider here
  // For example, using Gmail:
  service: "gmail",

  host: "smtp.gmail.com",
  tls: {
    ciphers: "SSLv3",
  },
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendWaitlistEmail = async (email: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Waitlist Signup!",
    html: `
      <h1>Email: ${email}</h1>
  
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
