"use client";

import { useCart } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Your Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className={styles.empty}>
            <p>Your cart is currently empty.</p>
            <Link href="/" className={styles.continueBtn}>Continue Shopping</Link>
          </div>
        ) : (
          <div className={styles.content}>
            <div className={styles.cartItems}>
              {cart.map((item) => (
                <div key={item.id} className={styles.item}>
                  <div className={styles.imageWrapper}>
                    <Image 
                      src={item.product.image} 
                      alt={item.product.name} 
                      width={100} 
                      height={100} 
                      className={styles.image}
                    />
                  </div>
                  
                  <div className={styles.details}>
                    <h3 className={styles.itemName}>{item.product.name}</h3>
                    <p className={styles.variation}>{item.variation.name}</p>
                    <p className={styles.price}>LKR {item.variation.price.toLocaleString()}</p>
                  </div>

                  <div className={styles.actions}>
                    <div className={styles.quantityControl}>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button 
                      className={styles.removeBtn}
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                  
                  <div className={styles.itemTotal}>
                    LKR {(item.variation.price * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.summary}>
              <h2 className={styles.summaryTitle}>Order Summary</h2>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>LKR {cartTotal.toLocaleString()}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className={`${styles.summaryRow} ${styles.total}`}>
                <span>Total</span>
                <span>LKR {cartTotal.toLocaleString()}</span>
              </div>
              
              <button className={styles.checkoutBtn}>Proceed to Checkout</button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
