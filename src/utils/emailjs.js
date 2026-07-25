import emailjs from "@emailjs/browser";

/**
 * EmailJS Contact Form Utility
 *
 * 1. Register a free account at https://www.emailjs.com
 * 2. Set up an Email Service and Email Template.
 * 3. Add environment variables in `.env` (refer to `.env.example`):
 *    - VITE_EMAILJS_SERVICE_ID
 *    - VITE_EMAILJS_TEMPLATE_ID
 *    - VITE_EMAILJS_PUBLIC_KEY
 */

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

export function sendContactMessage(formEl) {
  return emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formEl, PUBLIC_KEY);
}
