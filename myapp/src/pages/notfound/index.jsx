import { Link } from "react-router";
import {
  FiHome,
  FiShoppingBag,
  FiSearch,
  FiAlertCircle,
  FiCompass,
  FiPackage,
} from "react-icons/fi";
import styles from "./notfound.module.css";
import PageWrapper from "../../components/PageWrapper";

const NotFoundPage = () => {
  return (
    <PageWrapper title="ShopVibe" className={styles.page}>
      <main className={styles.container}>
        {/* Illustrated 404 */}
        <div className={styles.illustration}>
          <FiSearch className={styles.iconFloat1} />
          <FiAlertCircle className={styles.iconFloat2} />
          <FiCompass className={styles.iconFloat3} />
          <FiPackage className={styles.iconFloat4} />
          <p className={styles.errorCode}>404</p>
        </div>

        <h1 className={styles.title}>Oops! Page Not Found</h1>
        <p className={styles.description}>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable. Let's get you back on track.
        </p>

        <div className={styles.actions}>
          <Link to="/" className={styles.btnPrimary}>
            <FiHome /> Back to Home
          </Link>
          <Link to="/products" className={styles.btnSecondary}>
            <FiShoppingBag /> Explore Products
          </Link>
        </div>

        <img
          className={styles.decoImage}
          src="https://illustrations.popsy.co/gray/falling.svg"
          alt="Lost illustration"
        />
      </main>
    </PageWrapper>
  );
};

export default NotFoundPage;
