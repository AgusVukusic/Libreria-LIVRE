import { categories } from '../data/categories';
import { generateWhatsappLink } from '../utils/whatsapp';
import styles from './CategoriesSection.module.css';

export default function CategoriesSection() {
  return (
    <section id="categorias" className={styles.section}>
      <div className={`container`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Categorías</h2>
          <p className={styles.subtitle}>Encontrá rápidamente lo que buscás.</p>
        </div>
        <div className={styles.grid}>
          {categories.map((cat) => (
            <article key={cat.id} className={styles.card}>
              <h3 className={styles.cardTitle}>{cat.name}</h3>
              <p className={styles.cardDesc}>{cat.description}</p>
              {generateWhatsappLink(`Hola, quería consultar sobre productos de la categoría: ${cat.name}.`) && (
                <a 
                  href={generateWhatsappLink(`Hola, quería consultar sobre productos de la categoría: ${cat.name}.`)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Consultar
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
