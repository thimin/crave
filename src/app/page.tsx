import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import FloatingMenuQR from "@/components/FloatingMenuQR";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <main className={styles.main}>
        <ProductGrid />
      </main>
      <Footer />
      <FloatingMenuQR />
    </div>
  );
}
