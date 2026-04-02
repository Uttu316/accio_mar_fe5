import { useNavigate } from "react-router";
import styles from "./productItem.module.css";

const ProductItem = ({ product }) => {
  const { thumbnail, id, title, description, category, price, rating } =
    product;

  const navigate = useNavigate();

  const onProductClick = () => {
    navigate(`/product/${id}`);
  };
  return (
    <div onClick={onProductClick} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={thumbnail} alt={title} />
      </div>
      <div className={styles.body}>
        <p className={styles.category}>{category}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>${price}</p>
        <p className={styles.ratingRow}>
          <span className={styles.ratingRate}>★ {rating.toFixed(1)}</span>
        </p>
        <p className={styles.description}>{description}</p>
      </div>
      <button className={styles.addToCart}>Add to cart</button>
    </div>
  );
};

export default ProductItem;
