import Image from 'next/image';
import styles from './FloatingMenuQR.module.css';

export default function FloatingMenuQR() {
  return (
    <div className={styles.floatingContainer}>
      <div className={styles.qrWrapper}>
        <div className={styles.scanLine}></div>
        <Image 
          src="/menu-qr.png" 
          alt="Scan for Menu" 
          width={120} 
          height={120} 
          className={styles.qrImage} 
        />
      </div>
      <div className={styles.label}>Scan for Menu</div>
    </div>
  );
}
