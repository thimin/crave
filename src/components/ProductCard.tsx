import Image from "next/image";
import styles from "./ProductCard.module.css";

interface ProductProps {
  id: number;
  name: string;
  image: string;
  price?: string;
}

export default function ProductCard({ name, image, price }: ProductProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={image} 
          alt={name} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />
        <div className={styles.overlay}>
          <button className={styles.viewBtn}>View Details</button>
        </div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.price}>{price ? `from LKR ${price}` : 'View Details'}</span>
      </div>
    </div>
  );
}
