import styles from "./WhatsOn.module.css";

export default function WhatsOn({ intro }) {
  return (
    <section id="whats-on" className={`${styles.section} section-padding`}>
      <div className="container">
        {/* Section Heading */}
        <div className="heading-centered">
          <span className="subtitle">{intro.subtitle}</span>
          <h2>{intro.heading}</h2>
        </div>

        {/* Events Grid */}
        <div className={styles.grid}>
          {intro.events.map((evt) => (
            <div key={evt.id} className={styles.card}>
              <div className={styles.accentBar}></div>
              <div className={styles.cardBody}>
                <h3 className={styles.title}>{evt.title}</h3>
                <p className={styles.description}>{evt.description}</p>
                <div className={styles.action}>
                  <a 
                    href={evt.pdfUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-gold"
                  >
                    View Menu / Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
