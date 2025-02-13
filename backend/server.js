import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())
app.use(
  cors({
    origin: 'https://green-energy-alpha.vercel.app',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: false
  })
)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://green-energy-alpha.vercel.app')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204)
  }

  next()
})

app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://green-energy-alpha.vercel.app')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.sendStatus(204)
})

const PORT = 1234

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
})

async function sendEmail(req, res) {
  const { name, mail, telephone, message } = req.body

  if (!name || !mail || !telephone || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.MAIL_USER}>`,
      to: 'hello@green-energy-it.com',
      subject: '[Green Energy] Form Submission',
      text: `A new application has been received:\n\nName: ${name}\nEmail: ${mail}\nPhone: ${telephone}\nMessage: ${message}`,
      html: `
        <p><strong>A new application has been received:</strong></p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${mail}</p>
        <p><strong>Phone:</strong> ${telephone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    })

    console.log('Message sent: %s', info.messageId)
    res.status(200).json({ success: true, messageId: info.messageId })
  } catch (error) {
    console.error('Error sending email:', error.message)
    res.status(500).json({ error: 'Error sending email' })
  }
}

// Добавляем обработчик POST для отправки email
app.post('/send-email', sendEmail)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
