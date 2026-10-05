'use client';
import ThemeProviders from '@/components/ThemeProvider';
import styles from '@/views/packing/shell.module.css';

export default function MainLayout({ children }) {
  return (
    <ThemeProviders>
      <div className={styles.shell}>
        <a className={styles.skip} href="#contenido">
          Saltar al contenido
        </a>
        <header className={styles.header}>
          <a className={styles.brand} href="/" aria-label="AVICOR, inicio">
            <span className={styles.mark}>
              A<span>.</span>
            </span>
            <span>
              AVICOR<span className={styles.brandSub}>INGENIERÍA &amp; CONSTRUCCIÓN</span>
            </span>
          </a>
          <nav aria-label="Navegación principal">
            <a href="/#servicios">Servicios</a>
            <a href="/#temporada">Temporadas</a>
            <a href="/#enfoque">Nuestro enfoque</a>
          </nav>
          <a className={styles.cta} href="/#contacto">
            Cotizar proyecto ↗
          </a>
        </header>
        <main id="contenido">{children}</main>
        <footer className={styles.footer}>
          <a className={styles.brand} href="/">
            AVICOR
          </a>
          <p>Andrade Vargas Ingeniería &amp; Construcción.</p>
          <a href="/catalogo-avicor.pdf" download>
            Catálogo de servicios ↗
          </a>
        </footer>
      </div>
    </ThemeProviders>
  );
}
