import { useState } from "react";
import ContactForm from "./contactForm";
import ContactList from "./contactList";
import styles from "./contact.module.css";

const Contact = () => {
  const [messages, setMessages] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const [data, setData] = useState({
    username: "",
    message: "",
    email: "",
  });

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

  const onDelete = (id) => {
    setMessages((curr) => curr.filter((i) => i.id !== id));
  };
  const onEdit = (item, index) => {
    setEditIndex(index);
    setData({
      username: item.username,
      message: item.message,
      email: item.email,
    });
  };
  const onUpdate = (formData) => {
    const editItem = messages[editIndex];

    editItem.email = formData.email;
    editItem.message = formData.message;
    editItem.username = formData.username;

    setMessages((curr) => {
      curr[editIndex] = editItem;
      return curr;
    }); // update arrary on edit index position

    setEditIndex(null); //reset edit index
  };

  return (
    <div id="contact" className={styles.section}>
      <h2 className={styles.title}>Contact Me</h2>
      <ContactForm
        data={data}
        setData={setData}
        editIndex={editIndex}
        onCreate={onCreate}
        onUpdate={onUpdate}
      />
      <ContactList
        editIndex={editIndex}
        messages={messages}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </div>
  );
};
export default Contact;
