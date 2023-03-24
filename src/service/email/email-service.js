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
        subject: "Bem-vindo ao Movie Tracker!",
        text: `Olá ${user.nome},

        Seja bem-vindo ao Movie Tracker! É com grande satisfação que recebemos você em nossa plataforma para acompanhar seus filmes e séries favoritos.
        
        Gostaríamos de informá-lo que a API do Movie Tracker já está disponível e pode ser acessada por meio da chave de acesso abaixo:
        
        Chave de acesso: ${user.key}
        
        Acesse a API do Movie Tracker em: https://api-movie-tracker.cyclic.app/
        
        Além disso, sugerimos que você leia a documentação da API para obter mais informações sobre como utilizá-la em sua aplicação:
        
        https://movie-tracker-phi.vercel.app/documentação
        
        Estamos sempre trabalhando para melhorar a experiência dos nossos usuários. Caso tenha alguma dúvida ou sugestão, não hesite em entrar em contato conosco.
        
        Agradecemos por escolher o Movie Tracker e esperamos que aproveite a plataforma!
        
        Atenciosamente,
        
        Equipe do Movie Tracker`,
        html: `
        <p>Olá ${user.nome},</p>
        <p>Seja bem-vindo ao Movie Tracker! É com grande satisfação que recebemos você em nossa plataforma para acompanhar seus filmes e séries favoritos.</p>
        <p>Gostaríamos de informá-lo que a API do Movie Tracker já está disponível e pode ser acessada por meio da chave de acesso abaixo:</p>
        <p>Chave de acesso: ${user.nome.key}</p>
        <p>Acesse a API do Movie Tracker em: <a href="https://api-movie-tracker.cyclic.app/">https://api-movie-tracker.cyclic.app/</a></p>
        <p>Além disso, sugerimos que você leia a documentação da API para obter mais informações sobre como utilizá-la em sua aplicação:</p>
        <p><a href="https://movie-tracker-phi.vercel.app/documentação">https://movie-tracker-phi.vercel.app/documentação</a></p>
        <p>Estamos sempre trabalhando para melhorar a experiência dos nossos usuários. Caso tenha alguma dúvida ou sugestão, não hesite em entrar em contato conosco.</p>
        <p>Agradecemos por escolher o Movie Tracker e esperamos que aproveite a plataforma!</p>
        <p>Atenciosamente,</p>
        <p>Equipe do Movie Tracker</p>
      `
    }
    
try {
    await sendGrid.send(messageData)
    console.log(`Email enviando com sucesso para ${destinatario}`)
} catch (error) {
    console.log(error)
}
}
