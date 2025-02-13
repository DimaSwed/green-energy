import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { name, mail, telephone, message } = req.body
  if (!name || !mail || !telephone || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  })

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
