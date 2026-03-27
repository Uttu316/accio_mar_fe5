import styles from "./listItem.module.css";
import { MdEdit as EditIcon, MdDelete as DeleteIcon } from "react-icons/md";

const ListItem = ({ item, editIndex, index, onDelete, onEdit }) => {
  const { username, timestamp, email, id, message } = item;

  const isEditing = editIndex === index;
  return (
    <div className={`${styles.card} ${isEditing ? styles.editing : ""}`}>
      <p className={styles.username}>{username}</p>
      <p className={styles.timestamp}>{new Date(timestamp).toLocaleString()}</p>
      <p className={styles.email}>{email}</p>
      <p className={styles.message}>{message}</p>
      <div className={styles.itemActions}>
        <button
          disabled={editIndex !== null}
          onClick={() => onEdit(item, index)}
          className={styles.itemEditBtn}
        >
          <EditIcon />
        </button>
        <button
          disabled={editIndex !== null}
          onClick={() => onDelete(id)}
          className={styles.itemDeleteBtn}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};
export default ListItem;
