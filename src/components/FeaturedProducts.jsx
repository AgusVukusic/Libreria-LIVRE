import { products } from '../data/products';
import { generateWhatsappLink } from '../utils/whatsapp';
import styles from './FeaturedProducts.module.css';

export default function FeaturedProducts() {
  return (
    <section id="productos" className={styles.section}>
      <div className={`container`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Productos Destacados</h2>
          <p className={styles.subtitle}>Algunos de nuestros artículos más buscados.</p>
        </div>
        <div className={styles.grid}>
          {products.map((product) => (
            <article key={product.id} className={styles.card}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.imageText}>LIVRE</span>
              </div>
              <div className={styles.content}>
                <span className={styles.category}>{product.category}</span>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productDesc}>{product.description}</p>
                <a 
                  href={generateWhatsappLink(`Hola LIVRE, quería consultar disponibilidad y precio de: ${product.name}.`)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Consultar disponibilidad
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
