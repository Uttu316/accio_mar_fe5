import { Link } from "react-router";
import { FiTruck, FiShield, FiCreditCard, FiHeadphones } from "react-icons/fi";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./home.module.css";

const HomePage = () => {
  return (
    <div>
      <Header title="ShopVibe" />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>New Season 2026</span>
          <h1 className={styles.heroTitle}>
            Discover the Latest{" "}
            <span className={styles.heroHighlight}>Trends</span> in Fashion
            &amp; Tech
          </h1>
          <p className={styles.heroSubtitle}>
            Shop premium products at unbeatable prices. Free shipping on orders
            over $50, easy returns, and 24/7 customer support.
          </p>
          <div className={styles.heroCta}>
            <Link to="/products" className={styles.btnPrimary}>
              Shop Now
            </Link>
            <Link to="/about" className={styles.btnSecondary}>
              Learn More
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&q=80"
            alt="Shopping bags and boxes"
          />
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Why Shop With Us</h2>
        <p className={styles.sectionSubtitle}>
          We make online shopping simple, safe, and satisfying.
        </p>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <FiTruck />
            </div>
            <h3 className={styles.featureTitle}>Free Shipping</h3>
            <p className={styles.featureDesc}>
              Free delivery on all orders over $50. Fast and reliable worldwide
              shipping.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <FiShield />
            </div>
            <h3 className={styles.featureTitle}>Secure Payments</h3>
            <p className={styles.featureDesc}>
              Your transactions are protected with industry-leading encryption
              technology.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <FiCreditCard />
            </div>
            <h3 className={styles.featureTitle}>Easy Returns</h3>
            <p className={styles.featureDesc}>
              Not satisfied? Return any item within 30 days for a full refund,
              no questions asked.
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <FiHeadphones />
            </div>
            <h3 className={styles.featureTitle}>24/7 Support</h3>
            <p className={styles.featureDesc}>
              Our dedicated team is here around the clock to help with any
              questions or concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className={styles.brands}>
        <p className={styles.brandsLabel}>Trusted by leading brands</p>
        <div className={styles.brandsRow}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            alt="Microsoft"
          />
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.newsletter}>
        <h2 className={styles.newsletterTitle}>Stay in the Loop</h2>
        <p className={styles.newsletterDesc}>
          Subscribe to get exclusive deals, new arrivals, and style tips.
        </p>
        <div className={styles.newsletterForm}>
          <input
            className={styles.newsletterInput}
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
          />
          <button className={styles.newsletterBtn}>Subscribe</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
