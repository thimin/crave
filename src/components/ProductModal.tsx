"use client";

import { useState } from "react";
import Image from "next/image";
import { Product, ProductVariation } from "@/data/products";
import styles from "./ProductModal.module.css";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, variation: ProductVariation) => void;
}

export default function ProductModal({ product, isOpen, onClose, onAddToCart }: ProductModalProps) {
  const [selectedVariation, setSelectedVariation] = useState<ProductVariation | null>(null);

  if (!isOpen || !product) return null;

  // Set initial selected variation when modal opens or product changes
  if (!selectedVariation && product.variations.length > 0) {
    setSelectedVariation(product.variations[0]);
  } else if (selectedVariation && !product.variations.includes(selectedVariation)) {
     setSelectedVariation(product.variations[0]);
  }

  const handleVariationChange = (variation: ProductVariation) => {
    setSelectedVariation(variation);
  };

  const currentPrice = selectedVariation ? selectedVariation.price : 0;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        
        <div className={styles.content}>
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className={styles.image} 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          
          <div className={styles.detailsSection}>
            <h2 className={styles.title}>{product.name}</h2>
            <p className={styles.description}>{product.description}</p>
            
            <div className={styles.variations}>
              <h3 className={styles.sectionTitle}>Choose Variation</h3>
              <div className={styles.variationList}>
                {product.variations.map((variation, index) => (
                  <button 
                    key={index}
                    className={`${styles.variationBtn} ${selectedVariation === variation ? styles.active : ''}`}
                    onClick={() => handleVariationChange(variation)}
                  >
                    {variation.name}
                  </button>
                ))}
              </div>
            </div>

            {selectedVariation?.description && (
               <p className={styles.variationDesc}>{selectedVariation.description}</p>
            )}

            <div className={styles.priceSection}>
              <span className={styles.priceLabel}>Price:</span>
              <span className={styles.price}>LKR {currentPrice.toLocaleString()}</span>
            </div>

            <div className={styles.actions}>
              <button 
                className={styles.addToCartBtn}
                onClick={() => selectedVariation && onAddToCart(product, selectedVariation)}
              >
                Add to Cart
              </button>
              <button className={styles.orderNowBtn}>
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
