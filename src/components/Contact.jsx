import { motion } from 'framer-motion';

function Contact() {
  return (
    <footer className="contact" id="contact">

      {/* Main Call to Action */}
      <motion.div 
        className="contact-content"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="section-badge" style={{ marginBottom: '2rem' }}>
          03 // GET IN TOUCH
        </div>
        
        <h2 className="contact-title contact-title-dark">Let's build something.</h2>
        
        <a href="mailto:hello@example.com" className="contact-email contact-email-dark">
          hello@example.com
        </a>
      </motion.div>
      
      {/* Footer Details */}
      <motion.div 
        className="contact-bottom contact-bottom-dark"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      >
        <p>© {new Date().getFullYear()} Simone. All rights reserved.</p>
        <div className="social-links social-links-dark">
          <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#" target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </motion.div>
    </footer>
  );
}

export default Contact;