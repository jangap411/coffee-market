const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

// constants
const MAIL_HOST = process.env.MAIL_HOST;
const USER = process.env.USER;
const PASSWORD = process.env.EMAIL_PASSWORD;
const EMAIL = process.env.EMAIL;

/**
 * Send Email Notification function
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @throws {Error} - When request fails
 * @returns {Boolean}
 */
const sendEmail = async (emailTo) => {
  try {
    // email config
    const config = {
      host: MAIL_HOST,
      port: 25,
      secure: false,
      // auth: {
      //   user: EMAIL,
      //   pass: PASSWORD,
      // },
      tls: {
        rejectUnauthorized: true,
      },
    };

    // creating nodemailer transporter
    const transporter = nodemailer.createTransport(config);

    // generate email body
    const MailGenerator = new Mailgen({
      //   theme: "cerberus",
      theme: THEME,
      product: {
        name: NAME,
        // TODO: Add link to logo and host
        link: "http://localhost",
        logo: "http://localhost",
      },
    });

    // create email message
    const response = {
      body: {
        color: "#FFF5E8",
        name: "There",
        intro: "Welcome to Kofi Maketples",
        action: {
          instructions: "Click the button below to verify your email addrees",
          button: {
            color: "#EB3C47",
            text: "Hello",
            link: `http://localhost`,
          },
        },
        outro: "Your Ultimate Coffee Experience",
      },
    };

    // generate message body
    const mail = MailGenerator.generate(response);

    const message = {
      from: EMAIL,
      to: emailTo,
      subject: "Welcome to Kofi Maketples",
      html: mail,
    };

    // sending email
    transporter
      .sendMail(message)
      .then(() => {
        console.log("email sent");
        return true;
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = sendEmail;
