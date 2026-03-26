import { useState } from "react";
import ContactForm from "./contactForm";
import ContactList from "./contactList";
import styles from "./contact.module.css";

const Contact = () => {
  const [messages, setMessages] = useState([]);

  const onCreate = (formData) => {
    const { username, message, email } = formData;
    const entry = {
      username,
      message,
      email,
      timestamp: Date.now(),
      id: parseInt(Math.random() * 1000000),
    };

    setMessages((curr) => [...curr, entry]);
  };

  return (
    <div id="contact" className={styles.section}>
      <h2 className={styles.title}>Contact Me</h2>
      <ContactForm onCreate={onCreate} />
      <ContactList messages={messages} />
    </div>
  );
};
export default Contact;
