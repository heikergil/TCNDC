const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_api_key)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from:"gilheyker@gmail.com",
        subject: "Welcome to task manager app",
        text: `Welcome to the app, ${name}. let me know how you get along with the app`
    })
}

const sendEmailWhenUserIsDeleted = (email, name) => {
    sgMail.send({
        to: email,
        from:"gilheyker@gmail.com",
        subject: "Sorry to see you go",
        text: `Goodbye ${name}, let me know is there is something we could have done better`
    })
}



module.exports = {
    sendWelcomeEmail,
    sendEmailWhenUserIsDeleted
}