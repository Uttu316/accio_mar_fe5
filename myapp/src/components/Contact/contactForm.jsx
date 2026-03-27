import { useState } from "react";
import styles from "./contactForm.module.css";

const ContactForm = ({ onCreate, onUpdate, editIndex, data, setData }) => {
  const [error, setError] = useState("");

  const onInput = (e) => {
    setError(""); // reset error on every input
    const { value, id } = e.target;

    setData((curr) => ({ ...curr, [id]: value })); // returning new object with updated value
  };

  const onSubmit = (e) => {
    e.preventDefault(); // stop default behaviour of form
    if (
      data.username.length > 3 &&
      data.email.includes("@") &&
      data.message.length > 8
    ) {
      if (editIndex !== null) {
        onUpdate(data);
      } else {
        onCreate(data);
      }

      setData({ username: "", email: "", message: "" }); //reset the data of form
    } else {
      setError("Please fill values"); // show error message
    }
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="username">
          Name
        </label>
        <input
          className={styles.input}
          value={data.username}
          onChange={onInput}
          id="username"
          name="username"
          placeholder="Enter your name"
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.input}
          value={data.email}
          onChange={onInput}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">
          Message
        </label>
        <textarea
          className={styles.textarea}
          value={data.message}
          onChange={onInput}
          id="message"
          name="message"
          placeholder="Write your message..."
        ></textarea>
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <button className={styles.submitBtn} onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
};
export default ContactForm;
