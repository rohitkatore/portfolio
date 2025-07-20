import emailjs from "@emailjs/browser";

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_demo",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_demo",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "demo_key",
};

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(emailjsConfig.publicKey);
};

// Send email function
export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: "Rohit Katore",
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams,
      emailjsConfig.publicKey
    );

    return response;
  } catch (error) {
    throw new Error(`Failed to send email: ${error.message}`);
  }
};
