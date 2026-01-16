import Link from "next/link";
import { FaInstagram, FaFacebook, FaTiktok, FaCcVisa, FaCcMastercard } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.heading}>Shop</h3>
          <Link href="/" className={styles.link}>All Collections</Link>
          <Link href="/" className={styles.link}>Best Sellers</Link>
          <Link href="/" className={styles.link}>New Arrivals</Link>
        </div>
        
        <div className={styles.column}>
          <h3 className={styles.heading}>Company</h3>
          <Link href="/" className={styles.link}>About Us</Link>
          <Link href="/" className={styles.link}>Contact</Link>
          <Link href="/" className={styles.link}>FAQ</Link>
        </div>

        <div className={styles.column}>
          <h3 className={styles.heading}>Follow Us</h3>
          <div className={styles.socialLinks}>
            <a href="https://www.instagram.com/_cravestudio_?igsh=MWZvZTNidzJtbjY3eQ==" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaInstagram className={styles.socialIcon} />
              Instagram
            </a>
            <a href="https://www.facebook.com/share/1C2zcP1wfH/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaFacebook className={styles.socialIcon} />
              Facebook
            </a>
            <a href="https://www.tiktok.com/@crave2025?_r=1&_t=ZS-92N8MvijG8g" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaTiktok className={styles.socialIcon} />
              TikTok
            </a>
          </div>
        </div>

        <div className={styles.branding}>
          <h2 className={styles.logoText}>CRAVE</h2>
          <p className={styles.slogan}>TASTE THE ART OF LUXURY</p>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <div className={styles.paymentMethods}>
          <span className={styles.paymentLabel}>We Accept:</span>
          <FaCcVisa className={styles.paymentIcon} title="Visa" />
          <FaCcMastercard className={styles.paymentIcon} title="MasterCard" />
        </div>
        <p>&copy; {new Date().getFullYear()} CRAVE. All rights reserved.</p>
      </div>
    </footer>
  );
}
