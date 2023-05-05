import Mailgen from "mailgen";
import { ISendEmail } from "../interfaces/user";
import "dotenv/config"
import { createTransport } from "nodemailer"

export const sendEmail = async ({ to, subject, text }: ISendEmail) => {
    const transporter = createTransport({
        host: "smtp.gmail.com",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })
    await transporter.sendMail({
        from: "gelanlucas@gmail.com",
        to,
        subject,
        html: text
    }).then(() => {
        console.log("Email send with success");
    }).catch((err) => {
        console.log(err);
    })
}

export const resetPasswordTemplate = (userEmail: string, userName: string, protocol: string, host: string, resetToken: string) => {
    const mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: 'MotorShop',
            link: `${protocol}://${host}`
        }
    });
    const email = {
        body: {
            name: userName,
            intro: 'Você recebeu este e-mail porque uma solicitação de redefinição de senha para sua conta foi recebida.',
            action: {
                instructions: 'Clique no botão abaixo para redefinir sua senha:',
                button: {
                    color: '#DC4D2F',
                    text: 'Redefina sua senha',
                    link: `${protocol}://${host}/reset_password/${resetToken}`
                }
            },
            outro: 'Se você não solicitou uma redefinição de senha, nenhuma outra ação é necessária de sua parte'
        }
    };

    const emailBody = mailGenerator.generate(email)

    const emailTemplate = {
        to: userEmail,
        subject: "Redefinir senha",
        text: emailBody
    }

    return emailTemplate
}