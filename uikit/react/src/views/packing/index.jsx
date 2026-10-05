import services from './services.json';
import styles from './packing.module.css';

export default function Packing() {
  return (
    <div className={styles.site}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>INFRAESTRUCTURA · MANTENCIÓN · PACKING</p>
          <h1>
            Tu operación avanza.
            <br />
            <span>Nosotros la sostenemos.</span>
          </h1>
          <p>Construcción, reparación y mejoramiento de infraestructura para packing, plantas de proceso, bodegas y áreas exteriores.</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#servicios">
              Explorar servicios <span>↗</span>
            </a>
            <a className={styles.secondary} href="#temporada">
              Soluciones por temporada ↓
            </a>
          </div>
          <div className={styles.heroNote}>
            <span className={styles.dot} /> Un equipo para las distintas necesidades de tu instalación.
          </div>
        </div>
        <div
          className={styles.blueprint}
          role="img"
          aria-label="Ilustración esquemática de una planta industrial con estructura metálica y áreas de proceso"
        >
          <div className={styles.drawingLabel}>INFRAESTRUCTURA QUE CONECTA TU OPERACIÓN</div>
          <svg viewBox="0 0 540 390" fill="none" aria-hidden="true">
            <g stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
              <path d="M55 278 278 380 503 270M55 248 278 350 503 240M95 245V130l175-80 185 84v112L280 327Z" />
              <path d="m95 130 185 85 175-81M280 215v112M95 130l92-74 83-6 185 84M187 56l93 75 175 3M280 131v84M95 177l185 85 175-81M140 151v114M186 172v114M233 193v113M325 194v112M370 174v113M415 153v113" />
              <path d="m115 241 165 76 151-70M115 221l165 76 151-70M115 221v20M280 297v20M431 227v20" />
              <path d="m146 209 31-14 34 16-31 14ZM146 209v20l34 16 31-14v-20M180 225v20m28-8 31-14 34 16-31 14ZM208 237v20l34 16 31-14v-20M242 253v20" />
            </g>
            <g stroke="#d9fb70" strokeWidth="3">
              <path d="M95 245V130l175-80 185 84v112M95 130l185 85 175-81M280 215v112" />
            </g>
            <g fill="#d9fb70">
              <circle cx="95" cy="130" r="5" />
              <circle cx="280" cy="215" r="5" />
              <circle cx="455" cy="134" r="5" />
            </g>
          </svg>
          <div className={styles.drawingBottom}>
            <span>ESTRUCTURAS / PROCESOS / ESPACIOS</span>
            <span>01 — 12</span>
          </div>
        </div>
      </section>
      <div className={styles.strip}>
        <span>PACKING</span>
        <span>PLANTAS DE PROCESO</span>
        <span>BODEGAS</span>
        <span>ÁREAS EXTERIORES</span>
      </div>
      <section id="servicios" className={styles.section}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>01 / QUÉ HACEMOS</p>
            <h2>
              Distintas necesidades.
              <br />
              Un mismo equipo.
            </h2>
          </div>
          <p>
            Desde una reparación puntual hasta un proyecto de mayor duración. Soluciones a medida para tu infraestructura, operación y
            seguridad.
          </p>
        </div>
        <div className={styles.services}>
          {services.map((service) => (
            <details key={service.id} className={styles.service}>
              <summary>
                <span className={styles.number}>{String(service.id).padStart(2, '0')}</span>
                <h3>{service.title}</h3>
                <span className={styles.plus} aria-hidden="true">
                  +
                </span>
              </summary>
              <div className={styles.serviceBody}>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {service.note && <p className={styles.note}>{service.note}</p>}
              </div>
            </details>
          ))}
        </div>
      </section>
      <section id="temporada" className={styles.season}>
        <p className={styles.eyebrow}>02 / CONTINUIDAD OPERACIONAL</p>
        <h2>
          Antes, durante y después
          <br />
          de cada temporada.
        </h2>
        <div className={styles.seasonGrid}>
          {[
            [
              '01',
              'Pretemporada',
              'Preparar para comenzar.',
              'Inspecciones preventivas, adecuaciones para nuevos equipos y recuperación de infraestructura antes del inicio de la operación.'
            ],
            [
              '02',
              'Durante temporada',
              'Apoyar la operación.',
              'Reparaciones, mantención correctiva y apoyo ante emergencias operacionales en estructuras, accesos y áreas de proceso.'
            ],
            [
              '03',
              'Postemporada',
              'Mejorar lo que viene.',
              'Mejoramientos, ampliaciones y mantenciones programadas para acondicionar la instalación de cara al próximo ciclo.'
            ]
          ].map(([n, title, subtitle, body]) => (
            <article key={n}>
              <span>
                {n} / {title}
              </span>
              <h3>{subtitle}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="enfoque" className={styles.section}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>03 / CÓMO TE APOYAMOS</p>
            <h2>
              Una solución que se adapta
              <br />a tu instalación.
            </h2>
          </div>
          <p>
            Centraliza tus necesidades de construcción y mantención en un equipo de trabajo flexible, con un alcance definido según cada
            requerimiento.
          </p>
        </div>
        <div className={styles.approach}>
          <article>
            <h3>Trabajos a medida</h3>
            <p>Fabricación de elementos especiales, modificaciones y adecuaciones según las necesidades de cada espacio.</p>
          </article>
          <article>
            <h3>Prevención y mantención</h3>
            <p>Inspecciones periódicas para detectar fallas antes de que generen interrupciones operacionales.</p>
          </article>
          <article>
            <h3>Soporte operacional</h3>
            <p>Apoyo en reparaciones y adecuaciones que requieren una respuesta rápida durante la operación del packing.</p>
          </article>
        </div>
      </section>
      <section id="contacto" className={styles.contact}>
        <div>
          <p className={styles.eyebrow}>EL SIGUIENTE PASO</p>
          <h2>
            Planifica el próximo trabajo
            <br />
            en tu instalación.
          </h2>
          <p>Cuéntanos el área a intervenir, el trabajo requerido y la etapa de temporada. Conversemos sobre el alcance de tu proyecto.</p>
        </div>
        <div className={styles.contactLinks}>
          <a className={styles.primary} href="https://wa.me/14319973009" target="_blank" rel="noopener noreferrer">
            WhatsApp +1 431 997 3009 ↗
          </a>
          <a className={styles.primary} href="https://wa.me/56977493531" target="_blank" rel="noopener noreferrer">
            WhatsApp +56 9 7749 3531 ↗
          </a>
          <a href="mailto:randrade@apinformatica.cl">randrade@apinformatica.cl</a>
          <a href="mailto:marcelo.andrade@apinformatica.cl">marcelo.andrade@apinformatica.cl</a>
          <a className={styles.secondary} href="/servicios-packing.txt" download>
            Descargar catálogo de servicios ↓
          </a>
        </div>
      </section>
    </div>
  );
}
