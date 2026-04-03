import { FiHeart, FiGlobe, FiZap, FiAward } from "react-icons/fi";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./about.module.css";
import PageWrapper from "../../components/PageWrapper";

const AboutPage = () => {
  return (
    <PageWrapper title="About Us">
      {/* Banner */}
      <section className={styles.banner}>
        <div className={styles.bannerOverlay} />
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>Our Story</h1>
          <p className={styles.bannerSub}>
            Building the future of online shopping since 2020
          </p>
        </div>
      </section>

      {/* Story */}
      <section className={styles.story}>
        <div className={styles.storyImage}>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
            alt="Team collaborating"
          />
        </div>
        <div className={styles.storyContent}>
          <p className={styles.storyLabel}>Who we are</p>
          <h2 className={styles.storyTitle}>Passionate About Great Products</h2>
          <p className={styles.storyText}>
            ShopVibe started with a simple idea: make quality products
            accessible to everyone. We curate the finest selection of fashion,
            electronics, and lifestyle products from trusted brands around the
            world.
          </p>
          <p className={styles.storyText}>
            Our team of dedicated professionals works tirelessly to ensure every
            customer has an exceptional shopping experience, from browsing to
            delivery and beyond.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <p className={styles.statNumber}>50K+</p>
            <p className={styles.statLabel}>Happy Customers</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statNumber}>10K+</p>
            <p className={styles.statLabel}>Products Available</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statNumber}>99%</p>
            <p className={styles.statLabel}>Satisfaction Rate</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statNumber}>30+</p>
            <p className={styles.statLabel}>Countries Served</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <h2 className={styles.valuesTitle}>Our Core Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <FiHeart />
            </div>
            <h3 className={styles.valueTitle}>Customer First</h3>
            <p className={styles.valueDesc}>
              Every decision we make starts with our customers. Your
              satisfaction is our top priority.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <FiGlobe />
            </div>
            <h3 className={styles.valueTitle}>Sustainability</h3>
            <p className={styles.valueDesc}>
              We are committed to eco-friendly practices and partnering with
              responsible brands.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>
              <FiZap />
            </div>
            <h3 className={styles.valueTitle}>Innovation</h3>
            <p className={styles.valueDesc}>
              We constantly improve our platform to deliver the best shopping
              experience possible.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={styles.team}>
        <h2 className={styles.teamTitle}>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamCard}>
            <img
              className={styles.teamAvatar}
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sarah Johnson"
            />
            <p className={styles.teamName}>Sarah Johnson</p>
            <p className={styles.teamRole}>CEO &amp; Founder</p>
          </div>
          <div className={styles.teamCard}>
            <img
              className={styles.teamAvatar}
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="David Chen"
            />
            <p className={styles.teamName}>David Chen</p>
            <p className={styles.teamRole}>Head of Engineering</p>
          </div>
          <div className={styles.teamCard}>
            <img
              className={styles.teamAvatar}
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Emily Rodriguez"
            />
            <p className={styles.teamName}>Emily Rodriguez</p>
            <p className={styles.teamRole}>Design Lead</p>
          </div>
          <div className={styles.teamCard}>
            <img
              className={styles.teamAvatar}
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="James Wilson"
            />
            <p className={styles.teamName}>James Wilson</p>
            <p className={styles.teamRole}>Marketing Director</p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default AboutPage;
