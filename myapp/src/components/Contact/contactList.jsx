import ListItem from "./listItem";
import styles from "./contactList.module.css";

const ContactList = ({ messages }) => {
  const isEmpty = messages.length === 0;
  return (
    <div className={styles.list}>
      {isEmpty && (
        <p className={styles.empty}>
          No messages yet — be the first to reach out.
        </p>
      )}
      {messages.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ContactList;
