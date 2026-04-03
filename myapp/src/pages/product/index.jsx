import { useParams, Link } from "react-router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { API } from "../../services";
import {
  FiShoppingCart,
  FiZap,
  FiTruck,
  FiShield,
  FiRefreshCw,
  FiAward,
  FiAlertTriangle,
  FiStar,
  FiMinus,
  FiPlus,
  FiChevronRight,
} from "react-icons/fi";
import styles from "./product.module.css";

const ProductPage = () => {
  const { id } = useParams();
  const [status, setStatus] = useState("loading");
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const getProduct = async () => {
    setStatus("loading");
    try {
      const res = await API({ endpoint: "/randomproducts/" + id });
      setProduct(res.data);
      setSelectedImage(0);
      setQuantity(1);
      setStatus("done");
    } catch (e) {
      setStatus("error");
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const isLoading = status === "loading";
  const isError = status === "error";
  const hasProduct = status === "done" && product !== null;

  return (
    <div className={styles.page}>
      <Header title="ShopVibe" />

      <main className={styles.main}>
        {isLoading && (
          <div className={styles.loading}>
            <div className={styles.spinner} />
            <p className={styles.loadingText}>Loading product details...</p>
          </div>
        )}

        {isError && (
          <div className={styles.error}>
            <FiAlertTriangle className={styles.errorIcon} />
            <h2 className={styles.errorTitle}>Failed to Load Product</h2>
            <p className={styles.errorDesc}>
              We could not fetch the product details. Please check your
              connection and try again.
            </p>
            <button className={styles.retryBtn} onClick={getProduct}>
              <FiRefreshCw /> Try Again
            </button>
          </div>
        )}

        {hasProduct && (
          <>
            {/* Breadcrumb */}
            <nav className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>
                Home
              </Link>
              <FiChevronRight className={styles.breadcrumbSep} />
              <Link to="/products" className={styles.breadcrumbLink}>
                Products
              </Link>
              <FiChevronRight className={styles.breadcrumbSep} />
              <span className={styles.breadcrumbCurrent}>{product.title}</span>
            </nav>

            <div className={styles.productGrid}>
              {/* Gallery */}
              <div className={styles.gallery}>
                <div className={styles.mainImage}>
                  <img
                    src={product.images?.[selectedImage] || product.thumbnail}
                    alt={product.title}
                  />
                </div>
                {product.images && product.images.length > 1 && (
                  <div className={styles.thumbRow}>
                    {product.images.map((img, i) => (
                      <div
                        key={i}
                        className={
                          i === selectedImage
                            ? styles.thumbActive
                            : styles.thumb
                        }
                        onClick={() => setSelectedImage(i)}
                      >
                        <img src={img} alt={`${product.title} ${i + 1}`} />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Details */}
              <div className={styles.details}>
                <span className={styles.categoryBadge}>{product.category}</span>
                <h1 className={styles.title}>{product.title}</h1>

                {product.brand && (
                  <p className={styles.brandRow}>
                    Brand:{" "}
                    <span className={styles.brandName}>{product.brand}</span>
                  </p>
                )}

                {/* Rating */}
                {product.rating !== undefined && (
                  <div className={styles.ratingRow}>
                    <div className={styles.stars}>
                      {Array.from({ length: 5 }, (_, i) => (
                        <FiStar
                          key={i}
                          fill={
                            i < Math.round(product.rating) ? "#f59e0b" : "none"
                          }
                          stroke={
                            i < Math.round(product.rating)
                              ? "#f59e0b"
                              : "#cbd5e1"
                          }
                        />
                      ))}
                    </div>
                    <span className={styles.ratingValue}>
                      {product.rating.toFixed(1)}
                    </span>
                    <span className={styles.ratingLabel}>out of 5</span>
                  </div>
                )}

                {/* Price */}
                <div className={styles.priceBlock}>
                  <p className={styles.price}>
                    $
                    {(
                      product.price *
                      (1 - (product.discountPercentage || 0) / 100)
                    ).toFixed(2)}
                  </p>
                  {product.discountPercentage > 0 && (
                    <>
                      <p className={styles.originalPrice}>
                        ${product.price.toFixed(2)}
                      </p>
                      <span className={styles.discountBadge}>
                        {product.discountPercentage.toFixed(1)}% OFF
                      </span>
                    </>
                  )}
                </div>

                {/* Stock */}
                {product.stock !== undefined && (
                  <div className={styles.stockRow}>
                    <span
                      className={
                        product.stock === 0
                          ? styles.stockDotOut
                          : product.stock <= 10
                            ? styles.stockDotLow
                            : styles.stockDot
                      }
                    />
                    <p
                      className={
                        product.stock === 0
                          ? styles.stockTextOut
                          : product.stock <= 10
                            ? styles.stockTextLow
                            : styles.stockText
                      }
                    >
                      {product.stock === 0
                        ? "Out of stock"
                        : product.stock <= 10
                          ? `Only ${product.stock} left in stock`
                          : `${product.stock} in stock`}
                    </p>
                  </div>
                )}

                <hr className={styles.divider} />

                {/* Description */}
                <p className={styles.descTitle}>Description</p>
                <p className={styles.descText}>{product.description}</p>

                <hr className={styles.divider} />

                {/* Quantity */}
                <div className={styles.quantityRow}>
                  <span className={styles.quantityLabel}>Quantity</span>
                  <div className={styles.quantityControl}>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      aria-label="Decrease quantity"
                    >
                      <FiMinus />
                    </button>
                    <span className={styles.qtyValue}>{quantity}</span>
                    <button
                      className={styles.qtyBtn}
                      onClick={() =>
                        setQuantity((q) => Math.min(q + 1, product.stock))
                      }
                      aria-label="Increase quantity"
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className={styles.actions}>
                  <button className={styles.addToCartBtn}>
                    <FiShoppingCart /> Add to Cart
                  </button>
                  <button className={styles.buyNowBtn}>
                    <FiZap /> Buy Now
                  </button>
                </div>

                {/* Perks */}
                <div className={styles.perks}>
                  <div className={styles.perkItem}>
                    <FiTruck className={styles.perkIcon} />
                    <p className={styles.perkText}>Free Shipping</p>
                  </div>
                  <div className={styles.perkItem}>
                    <FiShield className={styles.perkIcon} />
                    <p className={styles.perkText}>Secure Payment</p>
                  </div>
                  <div className={styles.perkItem}>
                    <FiRefreshCw className={styles.perkIcon} />
                    <p className={styles.perkText}>30-Day Returns</p>
                  </div>
                  <div className={styles.perkItem}>
                    <FiAward className={styles.perkIcon} />
                    <p className={styles.perkText}>Genuine Product</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;
