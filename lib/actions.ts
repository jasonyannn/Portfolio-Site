'use server'

import nodemailer from 'nodemailer'

export async function sendEmail({ name, email, message }: { name: string; email: string; message: string }) {
  console.log('Attempting to send email...')
  
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_PORT || !process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_FROM) {
    console.error('Email configuration is incomplete. Please check your environment variables.')
    throw new Error('Email configuration error')
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: 'jasonyan566@gmail.com',
    subject: `New message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.response)
    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}

