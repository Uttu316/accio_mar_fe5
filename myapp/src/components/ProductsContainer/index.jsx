import { useCallback, useEffect, useState } from "react";
import ProductsFilter from "./Productsfilter";
import ProductsList from "./Productslist";
import styles from "./productsContainer.module.css";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");
  const [filter, setfilter] = useState("all");

  const getProducts = useCallback(async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setStatus("done");
    } catch (e) {
      setStatus("error");
    }
  }, []);
  useEffect(() => {
    getProducts();
  }, []);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isSuccess = status === "done";

  const hasProducts = isSuccess && products.length > 0;
  const noProducts = isSuccess && products.length === 0;

  //heavy operation on every rerender

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Latest Products</h2>
      {isLoading && <h3 className={styles.loading}>Loading products...</h3>}
      {isError && <h3 className={styles.error}>Something went wrong</h3>}
      {noProducts && <h3 className={styles.empty}>Products not available</h3>}
      {hasProducts && (
        <div className={styles.content}>
          <ProductsFilter filter={filter} setfilter={setfilter} />
          <ProductsList filter={filter} products={products} />
        </div>
      )}
    </div>
  );
};
export default ProductsContainer;
