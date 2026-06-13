import styles from "./Hero.module.css";

export default function Hero({ videoUrl, heading, subheading, reservationUrl }) {
  return (
    <section id="home" className={styles.hero}>
      {/* Background Video */}
      <div className={styles.videoWrapper}>
        <video 
          className={styles.video}
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Hero Content */}
      <div className={styles.content}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Welcome to Ivy Tree</span>
          <h1 className={styles.heading}>{heading}</h1>
          <p className={styles.subheading}>{subheading}</p>
          <div className={styles.ctaWrapper}>
            <a 
              href={reservationUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-crimson"
            >
              Book a Table
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <span className={styles.scrollText}>Scroll Down</span>
      </div>
    </section>
  );
}
