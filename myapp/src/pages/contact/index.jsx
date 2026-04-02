import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div>
      <Header title="Contact Us" />

      {/* Banner */}
      <section className={styles.banner}>
        <h1 className={styles.bannerTitle}>Get in Touch</h1>
        <p className={styles.bannerSub}>
          We would love to hear from you. Reach out anytime.
        </p>
      </section>

      {/* Info Cards */}
      <section className={styles.infoSection}>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <FiMail />
            </div>
            <p className={styles.infoTitle}>Email Us</p>
            <p className={styles.infoText}>support@shopvibe.com</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <FiPhone />
            </div>
            <p className={styles.infoTitle}>Call Us</p>
            <p className={styles.infoText}>+1 (555) 123-4567</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <FiMapPin />
            </div>
            <p className={styles.infoTitle}>Visit Us</p>
            <p className={styles.infoText}>
              123 Commerce St, San Francisco, CA
            </p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <FiClock />
            </div>
            <p className={styles.infoTitle}>Business Hours</p>
            <p className={styles.infoText}>Mon – Fri, 9 AM – 6 PM PST</p>
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className={styles.formSection}>
        <div className={styles.formWrapper}>
          <h2 className={styles.formTitle}>Send a Message</h2>
          <p className={styles.formSubtitle}>
            Fill out the form and our team will get back to you within 24 hours.
          </p>
          <form>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="firstName">
                  First Name
                </label>
                <input
                  className={styles.input}
                  id="firstName"
                  type="text"
                  placeholder="John"
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className={styles.input}
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <input
                className={styles.input}
                id="email"
                type="email"
                placeholder="john@example.com"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="subject">
                Subject
              </label>
              <input
                className={styles.input}
                id="subject"
                type="text"
                placeholder="How can we help?"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="message">
                Message
              </label>
              <textarea
                className={styles.textarea}
                id="message"
                placeholder="Write your message here..."
              />
            </div>
            <button className={styles.submitBtn} type="button">
              <FiSend style={{ marginRight: 8, verticalAlign: "middle" }} />
              Send Message
            </button>
          </form>
        </div>

        <div className={styles.mapSide}>
          <img
            className={styles.mapImage}
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&q=80"
            alt="Office location map"
          />
          <div className={styles.officeCard}>
            <p className={styles.officeTitle}>Our Office</p>
            <div className={styles.officeRow}>
              <FiMapPin className={styles.officeRowIcon} />
              <p className={styles.officeRowText}>
                123 Commerce Street, Suite 400, San Francisco, CA 94105
              </p>
            </div>
            <div className={styles.officeRow}>
              <FiPhone className={styles.officeRowIcon} />
              <p className={styles.officeRowText}>+1 (555) 123-4567</p>
            </div>
            <div className={styles.officeRow}>
              <FiMail className={styles.officeRowIcon} />
              <p className={styles.officeRowText}>support@shopvibe.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <p className={styles.faqQuestion}>What is your return policy?</p>
            <p className={styles.faqAnswer}>
              We offer a 30-day hassle-free return policy on all items. Simply
              contact our support team to initiate a return.
            </p>
          </div>
          <div className={styles.faqItem}>
            <p className={styles.faqQuestion}>How long does shipping take?</p>
            <p className={styles.faqAnswer}>
              Standard shipping takes 5–7 business days. Express shipping is
              available for 2–3 day delivery.
            </p>
          </div>
          <div className={styles.faqItem}>
            <p className={styles.faqQuestion}>Do you ship internationally?</p>
            <p className={styles.faqAnswer}>
              Yes, we ship to over 30 countries worldwide. Shipping rates and
              times vary by destination.
            </p>
          </div>
          <div className={styles.faqItem}>
            <p className={styles.faqQuestion}>How can I track my order?</p>
            <p className={styles.faqAnswer}>
              Once your order ships, you will receive a tracking number via
              email to monitor your delivery status.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
