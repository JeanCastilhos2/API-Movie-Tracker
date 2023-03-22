import nodemailer from 'nodemailer'
import { User } from "../../models/User.js"

const EMAIL = process.env.EMAIL
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD

export const emailService = (request) => {

    const sendCreateEmail = async (destinatario) => {

        const user = await User.findOne({ email: destinatario })
        const transporter = nodemailer.createTransport({
            service: 'yahoo',
            auth: {
                user: EMAIL,
                pass: EMAIL_PASSWORD
            }
        })

        const mailOptions = {
            from: EMAIL,
            to: destinatario,
            subject: "Bem vindo ao Movie Tracker",
            text: `Bem vindo ${user.nome} sua key de aceso é ${user.key}`
        }

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log('Erro ao enviar e-mail:', error);
            } else {
                console.log('E-mail enviado para', destinatario, ':', info.response);
            }
        })
    }
    return {
        sendCreateEmail
    }
}
