import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_6kioje3',       // Replace with your EmailJS service ID
      'template_hjo3ba9',      // Replace with your template ID
      formRef.current,
      'jD7GDZlTgU0kQTefj'        // Replace with your public key
    )
    .then(() => {
      setDone(true);
      formRef.current.reset();
    })
    .catch((error) => {
      console.log(error.text);
    });
  };

  return (
    <section id="contact" className="min-h-screen px-4 md:px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 80 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-surface dark:bg-surface-dark border border-text-main/10 dark:border-text-main-dark/10 p-8 rounded-xl shadow-sm"
      >
        <h2 className="text-3xl font-serif text-center text-primary dark:text-primary-dark mb-6">Let's Connect</h2>
        <p className="text-center text-text-main/70 dark:text-text-main-dark/70 mb-10">Got a project or just want to say hi? Send me a message!</p>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-md bg-surface dark:bg-surface-dark text-text-main dark:text-text-main-dark border border-text-main/20 dark:border-text-main-dark/20 focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-md bg-surface dark:bg-surface-dark text-text-main dark:text-text-main-dark border border-text-main/20 dark:border-text-main-dark/20 focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            name="message"
            required
            className="w-full px-4 py-3 rounded-md bg-surface dark:bg-surface-dark text-text-main dark:text-text-main-dark border border-text-main/20 dark:border-text-main-dark/20 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-primary hover:opacity-90 text-white font-semibold py-3 rounded-md transition"
          >
            Send Message
          </button>
          {done && <p className="text-green-600 mt-2 text-sm text-center">Thanks! Your message was sent ✅</p>}
        </form>

        {/* Social Links */}
        <div className="mt-10 flex justify-center gap-6 text-xl">
          <a href="https://github.com/harshgupta2125" target="_blank" className="hover:text-navy transition">GitHub</a>
          <a href="https://linkedin.com/in/guptaharsh000" target="_blank" className="hover:text-navy transition">LinkedIn</a>
          <a href="mailto:harsh2125gupta@gmail.com" className="hover:text-navy transition">Email</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
