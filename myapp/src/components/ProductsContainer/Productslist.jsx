import { useMemo } from "react";
import ProductItem from "./Productitem";
import styles from "./productsList.module.css";

const ProductsList = ({ filter, products }) => {
  let visibleProducts = useMemo(() => {
    return filter === "all"
      ? products
      : products.filter((item) => item.category === filter);
  }, [products, filter]);
  return (
    <div className={styles.grid}>
      {visibleProducts.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductsList;
