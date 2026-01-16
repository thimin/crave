"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>Collections</Link>
          <Link href="/menu" className={styles.link}>Menu Card</Link>
          <Link href="/" className={styles.link}>Occasions</Link>
        </nav>
        
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image 
              src="/images/logo.png" 
              alt="Crave Logo" 
              width={120} 
              height={120} 
              className={styles.logo}
              priority
            />
          </Link>
        </div>

        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          <Link href="/cart" className={styles.iconBtn} aria-label="Cart">
            <div style={{ position: 'relative' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              {cartCount > 0 && (
                <span className={styles.badge}>{cartCount}</span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
