import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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
      setTimeout(() => setDone(false), 4000);
    })
    .catch((error) => {
      console.log(error.text);
    });
  };

  return (
    <section id="contact" className="min-h-screen px-4 md:px-6 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-serif text-center text-primary dark:text-primary-dark mb-2">
          Get In Touch
        </h2>
        <p className="text-center text-text-main/60 dark:text-text-main-dark/60 font-mono text-sm mb-12">
          $ let's build something amazing together (no drama like Hollywood productions please)
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }} 
        whileInView={{ opacity: 1, y: 0, scale: 1 }} 
        transition={{ duration: 0.7 }} 
        viewport={{ once: true }}
        className="max-w-2xl mx-auto relative"
      >
        {/* Glow background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-xl blur-2xl opacity-30" />

        <div className="relative bg-surface dark:bg-surface-dark border-2 border-primary/40 dark:border-primary-dark/40 p-8 rounded-lg group hover:border-primary dark:hover:border-primary-dark transition-all duration-300 overflow-hidden">
          {/* Terminal header */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-dark to-primary" />

          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

          <motion.form 
            ref={formRef} 
            onSubmit={sendEmail} 
            className="space-y-5 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-mono text-text-main/70 dark:text-text-main-dark/70 mb-2">
                ~ name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md bg-surface dark:bg-surface-dark text-text-main dark:text-text-main-dark border-2 border-primary/20 dark:border-primary-dark/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary dark:focus:border-primary-dark transition-all font-mono"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-mono text-text-main/70 dark:text-text-main-dark/70 mb-2">
                ~ email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md bg-surface dark:bg-surface-dark text-text-main dark:text-text-main-dark border-2 border-primary/20 dark:border-primary-dark/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary dark:focus:border-primary-dark transition-all font-mono"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-mono text-text-main/70 dark:text-text-main-dark/70 mb-2">
                ~ message
              </label>
              <textarea
                rows="5"
                placeholder="Your message here..."
                name="message"
                required
                className="w-full px-4 py-3 rounded-md bg-surface dark:bg-surface-dark text-text-main dark:text-text-main-dark border-2 border-primary/20 dark:border-primary-dark/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary dark:focus:border-primary-dark transition-all resize-none font-mono"
              ></textarea>
            </motion.div>

            <motion.button
              variants={itemVariants}
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(0, 70, 140, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-primary to-primary-dark hover:opacity-90 text-white font-semibold py-3 rounded-md transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>→</span> Send Message
            </motion.button>

            {done && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-500 font-mono text-center text-sm"
              >
                ✓ Message received! I'll get back to you soon.
              </motion.p>
            )}
          </motion.form>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 pt-6 border-t-2 border-primary/20 dark:border-primary-dark/20"
          >
            <p className="text-xs font-mono text-text-main/60 dark:text-text-main-dark/60 mb-4">
              $ connect on social
            </p>
            <div className="flex justify-center gap-6">
              <motion.a 
                href="https://github.com/harshgupta2125" 
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, color: "var(--primary)" }}
                className="text-sm font-mono text-primary dark:text-primary-dark hover:text-primary/80 transition-colors"
              >
                github
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/guptaharsh000" 
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-sm font-mono text-primary dark:text-primary-dark hover:text-primary/80 transition-colors"
              >
                linkedin
              </motion.a>
              <motion.a 
                href="mailto:harsh2125gupta@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="text-sm font-mono text-primary dark:text-primary-dark hover:text-primary/80 transition-colors"
              >
                email
              </motion.a>
            </div>
          </motion.div>

          {/* Corner accent */}
          <div className="absolute bottom-0 right-0 w-8 h-8 border-l-2 border-t-2 border-primary/30 group-hover:border-primary/60 transition-all" />
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
