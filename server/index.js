import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.CONTACT_PORT ?? 4321;

dotenv.config({ path: '.env' });

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Verify transporter when possible so we get earlier feedback
transporter.verify().catch(error => {
  console.warn('Mail transporter verification failed:', error.message);
});

app.post('/send-mail', async (req, res) => {
  const { name, email, subject, message, to, ccSender } = req.body;

  if (!name || !email || !message || !to) {
    return res.status(400).json({
      error: 'name, email, message, and to are required fields',
    });
  }

  const recipients = new Set([to]);
  if (ccSender && email) {
    recipients.add(email);
  }

  const payload = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: Array.from(recipients).join(', '),
    subject: `[Portfolio] ${subject}`,
    replyTo: email,
    text: `Message from ${name} <${email}>:\n\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
  };

  try {
    await transporter.sendMail(payload);
    return res.status(200).json({ status: 'sent' });
  } catch (error) {
    const err = error instanceof Error ? error : new Error('Unknown error');
    console.error('Failed to send contact mail:', err);
    return res.status(500).json({ error: err.message });
  }
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Contact API listening on http://localhost:${PORT}/send-mail`);
});
