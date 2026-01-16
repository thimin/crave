import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>TASTE THE ART OF LUXURY</h1>
        <p className={styles.subtitle}>Handcrafted edible bouquets for your most precious moments.</p>
        <Link href="#collections" className={styles.cta}>
          View Collections
        </Link>
      </div>
    </section>
  );
}
