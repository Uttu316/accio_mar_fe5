import { useContext } from "react";
import { Link } from "react-router";
import {
  FiShoppingCart,
  FiTrash2,
  FiCreditCard,
  FiShoppingBag,
} from "react-icons/fi";
import { CartContext } from "../../contexts/CartContext";
import PageWrapper from "../../components/PageWrapper";
import styles from "./cart.module.css";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const subtotal = cart.reduce((sum, item) => sum + (item.price || 0), 0);
  const shipping = cart.length > 0 ? 4.99 : 0;
  const total = subtotal + shipping;

  const isEmpty = cart.length === 0;

  return (
    <PageWrapper title="Cart" className={styles.page}>
      <main className={styles.main}>
        {isEmpty && (
          <div className={styles.empty}>
            <FiShoppingCart className={styles.emptyIcon} />
            <h2 className={styles.emptyTitle}>Your Cart is Empty</h2>
            <p className={styles.emptyDesc}>
              Looks like you have not added anything to your cart yet. Start
              exploring our products and find something you love.
            </p>
            <Link to="/products" className={styles.exploreBtn}>
              <FiShoppingBag /> Explore Products
            </Link>
          </div>
        )}

        {!isEmpty && (
          <>
            <h1 className={styles.heading}>
              Shopping Cart ({cart.length}{" "}
              {cart.length === 1 ? "item" : "items"})
            </h1>

            <div className={styles.layout}>
              {/* Items */}
              <div className={styles.itemsList}>
                {cart.map((item) => (
                  <div key={item.id} className={styles.item}>
                    <div className={styles.itemImage}>
                      <img
                        src={item.thumbnail || item.image}
                        alt={item.title}
                      />
                    </div>
                    <div className={styles.itemInfo}>
                      <p className={styles.itemTitle}>{item.title}</p>
                      <p className={styles.itemDesc}>{item.description}</p>
                      <span className={styles.itemCategory}>
                        {item.category}
                      </span>
                    </div>
                    <p className={styles.itemPrice}>
                      ${item.price?.toFixed(2)}
                    </p>
                    <button
                      className={styles.removeBtn}
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.title} from cart`}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className={styles.summary}>
                <h2 className={styles.summaryTitle}>Order Summary</h2>
                <div className={styles.summaryRow}>
                  <p className={styles.summaryLabel}>
                    Subtotal ({cart.length}{" "}
                    {cart.length === 1 ? "item" : "items"})
                  </p>
                  <p className={styles.summaryValue}>${subtotal.toFixed(2)}</p>
                </div>
                <div className={styles.summaryRow}>
                  <p className={styles.summaryLabel}>Shipping</p>
                  <p className={styles.summaryValue}>${shipping.toFixed(2)}</p>
                </div>
                <hr className={styles.summaryDivider} />
                <div className={styles.summaryTotal}>
                  <p className={styles.totalLabel}>Total</p>
                  <p className={styles.totalValue}>${total.toFixed(2)}</p>
                </div>
                <button className={styles.payBtn}>
                  <FiCreditCard /> Pay Now
                </button>
                <Link to="/products" className={styles.continueShopping}>
                  Continue Shopping
                </Link>
              </div>
            </div>
          </>
        )}
      </main>
    </PageWrapper>
  );
};

export default CartPage;
