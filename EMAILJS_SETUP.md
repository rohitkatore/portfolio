# EmailJS Setup Instructions

Follow these steps to set up EmailJS for the contact form:

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service

1. Go to the **Email Services** section
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

## 3. Create Email Template

1. Go to the **Email Templates** section
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
Reply to: {{reply_to}}
```

4. Note down your **Template ID**

## 4. Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. Copy it

## 5. Update Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
```

## 6. Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Template Variables Available

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_name}}` - Your name (Rohit Katore)
- `{{reply_to}}` - Sender's email for replies

## Security Notes

- Never commit your actual EmailJS credentials to version control
- The `.env` file is already in `.gitignore`
- EmailJS public key is safe to use in client-side code
- Consider setting up rate limiting for production use

## Troubleshooting

- **Messages not sending**: Check console for errors and verify your EmailJS credentials
- **Wrong template**: Ensure template ID matches your EmailJS template
- **Service errors**: Verify your email service is properly configured
- **Rate limits**: EmailJS free tier has monthly limits

For more help, visit the [EmailJS Documentation](https://www.emailjs.com/docs/).
