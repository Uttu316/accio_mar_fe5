import ListItem from "./listItem";
import styles from "./contactList.module.css";

const ContactList = ({ messages, editIndex, onDelete, onEdit }) => {
  const isEmpty = messages.length === 0;
  return (
    <div className={styles.list}>
      {isEmpty && (
        <p className={styles.empty}>
          No messages yet — be the first to reach out.
        </p>
      )}
      {messages.map((item, index) => (
        <ListItem
          key={item.id}
          index={index}
          editIndex={editIndex}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ContactList;
