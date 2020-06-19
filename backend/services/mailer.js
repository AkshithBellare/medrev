const nodemailer = require('nodemailer');

let emailSender = {};

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        pass: 'OSPROJECT',
        user: 'gdrive0012@gmail.com'
    }
});

let mailOptions = {
    from: 'gdrive0012@gmail.com',
    subject: 'Testing nodemailer',
    text: 'Hey fella it works',
};

let mailSender = (req, res, next) => {
    console.log("mailSender")
    console.log(res.locals.email)
    let newMailOptions = {
        ...mailOptions,
        to: res.locals.email,
        html: `
                    <body>
                        <a href="http://localhost:8080/verify">Verify REGISTRATION</a>
                    </body>
              `
    }
    console.log(newMailOptions);
    transporter.sendMail(newMailOptions, function (err, data) {
        if (err) {
            console.log('Error:', err);
        } else {
            console.log('Email Sent');
            next();
        }
    })

}

emailSender.mailSender = mailSender;

module.exports = emailSender;