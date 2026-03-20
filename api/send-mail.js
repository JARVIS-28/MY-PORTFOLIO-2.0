// api/send-mail.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, subject, message, ccSender = true } = req.body;

    if (!name || !email || !message || !subject) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const recipients = new Set([process.env.SMTP_USER]);
    if (ccSender) {
      recipients.add(email);
    }

    const formattedMessage = message.replace(/\n/g, "<br/>");

    const mailPayload = {
      from: process.env.SMTP_USER,
      to: Array.from(recipients).join(", "),
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Message from ${name} <${email}>:\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${formattedMessage}</p>`,
    };

    await transporter.sendMail(mailPayload);

    const autoReplyPayload = {
      from: process.env.SMTP_USER,
      to: email,
      subject: `Thanks for reaching out to janviirv`,
      text: `Hi ${name},\n\nThis is the mail you sent to janviirv from the portfolio:\n\n${message}\n\nWe will respond shortly.`,
      html: `<p>Hi ${name},</p><p>This is the mail you sent to janviirv from the portfolio:</p><blockquote>${formattedMessage}</blockquote><p>We will respond shortly.</p>`,
    };

    await transporter.sendMail(autoReplyPayload);

    return res.status(200).json({ success: true });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}