import styles from "./resumelist.module.css";

console.log(styles);
const ResumeList = (props) => {
  const { title, list } = props;

  return (
    <div className={styles.list_container}>
      <h2 className={styles.list_heading}>{title}</h2>
      <ul className={styles.list_box}>
        {list.map((item, index) => (
          <li className={styles.list_item} key={index}>
            <p>{item.label || item.role || item.degree}</p>
            {item.description && <p>{item.description}</p>}
            {item.institution && (
              <p>
                {item.institution} ({item.duration})
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ResumeList;
