import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { SOCIALS } from "../data/socials";
import { sendContactMessage } from "../utils/emailjs";

export default function Contact() {
  const formRef = useRef(null);
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Enter a valid email.";
    if (!values.message.trim()) e.message = "Message can't be empty.";
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setSending(true);
    try {
      await sendContactMessage(formRef.current);
      toast.success("Message sent — I'll get back to you soon.");
      setValues({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Something went wrong. Try again in a moment.");
    } finally {
      setSending(false);
    }
  };

  const info = [
    { Icon: Mail, label: "Email", value: SOCIALS.email.replace("mailto:", "") },
    { Icon: Phone, label: "Phone", value: SOCIALS.phone },
    { Icon: MapPin, label: "Location", value: SOCIALS.location },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-background/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="Contact" title="Let's build something together" />

        <div className="grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="rounded-2xl bg-card/60 border border-slate-700 backdrop-blur-md p-8 h-full">
              <p className="text-slate-300 mb-8 leading-relaxed">
                Open to full-time roles, internships, and collaborations. Reach out
                through the form or any of the channels below.
              </p>
              <div className="space-y-5 mb-8">
                {info.map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-700/60 flex items-center justify-center text-secondary">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{label}</p>
                      <p className="text-slate-200 text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg border border-slate-700 flex items-center justify-center text-slate-300 hover:text-secondary hover:border-secondary transition-colors"
                >
                  <Github size={16} />
                </a>
                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg border border-slate-700 flex items-center justify-center text-slate-300 hover:text-secondary hover:border-secondary transition-colors"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={SOCIALS.email}
                  className="w-10 h-10 rounded-lg border border-slate-700 flex items-center justify-center text-slate-300 hover:text-secondary hover:border-secondary transition-colors"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-2xl bg-card/60 border border-slate-700 backdrop-blur-md p-8 space-y-4"
            >
              <div>
                <input
                  name="name"
                  value={values.name}
                  onChange={(e) => setValues({ ...values, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-secondary text-sm"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  name="email"
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-secondary text-sm"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  name="message"
                  value={values.message}
                  onChange={(e) => setValues({ ...values, message: e.target.value })}
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-secondary text-sm resize-none"
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-transform disabled:opacity-60"
              >
                <Send size={16} /> {sending ? "Sending..." : "Send Message"}
              </button>
              <p className="text-[11px] text-slate-500 text-center">
                Powered by EmailJS — add your Service ID, Template ID, and Public Key in{" "}
                <code className="bg-slate-800 px-1 py-0.5 rounded">src/utils/emailjs.js</code>.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
