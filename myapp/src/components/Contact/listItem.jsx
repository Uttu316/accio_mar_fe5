import styles from "./listItem.module.css";

const ListItem = ({ item }) => {
  const { username, timestamp, email, message } = item;
  return (
    <div className={styles.card}>
      <p className={styles.username}>{username}</p>
      <p className={styles.timestamp}>{new Date(timestamp).toLocaleString()}</p>
      <p className={styles.email}>{email}</p>
      <p className={styles.message}>{message}</p>
    </div>
  );
};
export default ListItem;
