import nodemailer from 'nodemailer'

interface MailOptions {
  to: string
  subject: string
  text: string
  html?: string
}

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function sendEmail({ to, subject, text, html }: MailOptions) {
  try {
    const info = await transporter.sendMail({
      from: `"Raghuram Medicare Notification" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    })
    console.log('Message sent: %s', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}
