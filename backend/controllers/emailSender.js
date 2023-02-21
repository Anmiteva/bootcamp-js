
const dotenv = require('dotenv').config({
    path: '../.env'
})

const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI
const REFRESH_TOKEN = process.env.REFRESH_TOKEN

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID, 
    CLIENT_SECRET, 
    REDIRECT_URI
);
oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

async function sendMail() {
    try{
        const accesToken = await oAuth2Client.getAccessToken()

        const mailTransporter = nodemailer.createTransport({
            service: 'gmail',

            auth: {
                type: 'oAuth2',
                user: 'elixir.restaurant2023@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accesToken
            }
        })

        const mailOptions = {
            from: 'elixir.restaurant2023@gmail.com',
            to: 'melih6879@gmail.com',
            subject: 'Baklavichki...555 :)',
            text: 'Obicham baklavichki...555 :)',
        };

        const result = await mailTransporter.sendMail(mailOptions)
        return result;

    } catch (error) {
        return error;
    }
}

sendMail()
    .then((result) => console.log('Email sent...', result))
    .catch((error) => console.log(error.message))