# This is my updates Portfolio

## Contact API

1. Install the `express`, `cors`, and `nodemailer` dependencies (already listed in `package.json`).
2. Add a `.env.local` (ignored by git) or a shared `.env` file with the following values and your real SMTP credentials (use whichever naming feels best for your deployment):
	```
	VITE_CONTACT_ENDPOINT=http://localhost:4321/send-mail
	SMTP_HOST=your.smtp.host
	SMTP_PORT=587
	SMTP_SECURE=false
	SMTP_USER=mailer@example.com
	SMTP_PASSWORD=super-secret
	SMTP_FROM="Janvii R V <mailer@example.com>"
	CONTACT_PORT=4321
	```
3. Start the backend API with `npm run server`; it listens on `/send-mail` and forwards the payload to you plus the visitor when `ccSender` is true.
4. Run `npm run dev` for the React app; the contact modal now calls your local API so both you and the visitor receive a copy.
