import styles from "./productItem.module.css";

const ProductItem = ({ product }) => {
  const { image, title, description, category, price, rating } = product;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt={title} />
      </div>
      <div className={styles.body}>
        <p className={styles.category}>{category}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>${price}</p>
        <p className={styles.ratingRow}>
          <span className={styles.ratingRate}>★ {rating.rate}</span>
          <span className={styles.ratingCount}>({rating.count} reviews)</span>
        </p>
        <p className={styles.description}>{description}</p>
      </div>
      <button className={styles.addToCart}>Add to cart</button>
    </div>
  );
};

export default ProductItem;
