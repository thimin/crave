import styles from "./page.module.css";
import { menuItems, externalItems } from "@/data/menuData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MenuPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.menuCard}>
          <div className={styles.borderInner}>
            <div className={styles.header}>
              <h1 className={styles.title}>CRAVE</h1>
              <p className={styles.subtitle}>The Collection</p>
              <div className={styles.divider}></div>
            </div>

            <div className={styles.content}>
              {menuItems.map((item, index) => (
                <div key={index} className={styles.item}>
                  <div className={styles.itemHeader}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                  </div>
                  {item.description && (
                     <p className={styles.description}>{item.description}</p>
                  )}
                  <div className={styles.details}>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className={styles.detailLine}>{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.externalSection}>
              <h3 className={styles.sectionTitle}>Also Available (Sourced Externally)</h3>
              <ul className={styles.externalList}>
                {externalItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.footer}>
              <p>Subject to availability.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
