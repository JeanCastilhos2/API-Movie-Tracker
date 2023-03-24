import sendGrid from "@sendgrid/mail"
import { User } from "../../models/User.js"

const EMAIL = process.env.EMAIL
const SENDEREMAIL_API_KEY = process.env.SENDEREMAIL_API_KEY

export const emailService = async (destinatario) => {

    const user = await User.findOne({ email: destinatario })

    sendGrid.setApiKey(SENDEREMAIL_API_KEY)

    const messageData = {
        to: destinatario,
        from: EMAIL,
        subject: "teste",
        text: "teste",
        html: "<p>teste</p>"
    }

    try {
        await sendGrid.send(messageData)
        console.log(`Email enviando com sucesso para ${destinatario}`)
    } catch (error) {
        console.log(error)
    }
}
