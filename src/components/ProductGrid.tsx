"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import styles from "./ProductGrid.module.css";
import { products, Product, ProductVariation } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product: Product, variation: ProductVariation) => {
    addToCart(product, variation);
    handleCloseModal();
    // Optional: Show success toast
  };

  return (
    <section id="collections" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Collections</h2>
          <p className={styles.subtitle}>Explore our exquisite range of edible artistry</p>
        </div>
        
        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} onClick={() => handleProductClick(product)}>
              <ProductCard 
                id={product.id} 
                name={product.name} 
                image={product.image}
                price={product.variations[0]?.price.toLocaleString()}
              />
            </div>
          ))}
        </div>
      </div>

      <ProductModal 
        product={selectedProduct} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        onAddToCart={handleAddToCart}
      />
    </section>
  );
}
