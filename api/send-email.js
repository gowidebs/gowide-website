const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { type, data } = req.body;

  try {
    let emailContent = {};

    if (type === 'newsletter') {
      emailContent = {
        to: data.email,
        from: 'contact@gowide.in',
        subject: 'Welcome to GoWide Newsletter!',
        html: `
          <h2>Thank you for subscribing!</h2>
          <p>Hi there,</p>
          <p>Thank you for subscribing to our newsletter. You'll receive the latest updates, insights, and tips from GoWide.</p>
          <p>Best regards,<br>GoWide Team</p>
        `
      };
    } else if (type === 'contact') {
      emailContent = {
        to: data.email,
        from: 'contact@gowide.in',
        subject: 'Thank you for contacting GoWide',
        html: `
          <h2>Thank you for your inquiry!</h2>
          <p>Hi ${data.name},</p>
          <p>Thank you for reaching out to us. We have received your message and our team will contact you soon.</p>
          <p>Your message: "${data.message}"</p>
          <p>Best regards,<br>GoWide Team</p>
        `
      };
    }

    await sgMail.send(emailContent);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}