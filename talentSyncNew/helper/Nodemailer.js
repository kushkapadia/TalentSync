const nodemailer = require("nodemailer")
require("dotenv").config()
class Nodemailer{
    recieverEmail
    subject
    content

    constructor(recieverEmail,subject, content){
        this.recieverEmail = recieverEmail
        this.subject = subject
        this.content = content
    }

    sendMail(){

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.NODEMAILER_ADMIN_EMAIL,
                pass: process.env.NODEMAILER_ADMIN_PASSWORD
            }
        });

        let details = {
            from: process.env.NODEMAILER_ADMIN_EMAIL,
            to: this.recieverEmail,
            subject: this.subject,
            html: this.content
        }


        transporter.sendMail(details, (err) => {
            if (err) {
                return err;
            } else {
                return 'Sent Mail Successfully';
            }
        })
    }
}
module.exports = Nodemailer