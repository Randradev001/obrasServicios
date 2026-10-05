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
          <a className={styles.brand} href="/" aria-label="Minnor Services, inicio">
            <span className={styles.mark}>
              m<span>.</span>
            </span>
            <span>
              MINNOR<span className={styles.brandSub}>SERVICES</span>
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
            MINNOR SERVICES
          </a>
          <p>Infraestructura y mantención para packing.</p>
          <a href="/servicios-packing.txt" download>
            Catálogo de servicios ↗
          </a>
        </footer>
      </div>
    </ThemeProviders>
  );
}
