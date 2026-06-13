import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Banner with Gallery Background */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.heroSubtitle}>Established in Romford</span>
          <h1 className={styles.heroTitle}>Our Story</h1>
          <div className={styles.goldLine}></div>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="section-padding">
        <div className="container">
          <div className={styles.layout}>
            {/* Story Text */}
            <div className={styles.textCol}>
              <span className={styles.subtitle}>Welcome to The Ivy Tree</span>
              <h2 className={styles.heading}>The Vibrant Essence of Mediterranean Dining</h2>
              <div className={styles.shortGoldLine}></div>
              
              <p className={styles.paragraph}>
                Located in the heart of Romford, Essex, The Ivy Tree offers a culinary escape where traditional Mediterranean flavor meets modern dining elegance. Our name reflects our dedication to natural freshness, premium ingredients, and a welcoming, lively atmosphere.
              </p>
              
              <p className={styles.paragraph}>
                Every dish on our menu is a celebration of flavor, prepared by passionate chefs using ingredients that honor Mediterranean heritage. From cozy, intimate dinners to large celebratory banquets, we take pride in offering an exceptional experience.
              </p>

              <p className={styles.paragraph}>
                But we are more than just a restaurant. Climb the stairs to discover our sophisticated Cocktail Lounge, a premium space curated for drinks, conversations, and DJ nights. For those seeking intimacy, our semi-private dining rooms offer the perfect canvas for your private gatherings.
              </p>
            </div>

            {/* Aesthetics Image Frame */}
            <div className={styles.imageCol}>
              <div className={styles.frameContainer}>
                <div className={styles.frameLine}></div>
                <img 
                  src="/gallery/1.jpg" 
                  alt="The Ivy Tree interior dining styling" 
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Values Section */}
      <section className={styles.valuesSection}>
        <div className="container">
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueNumber}>01</div>
              <h3 className={styles.valueTitle}>Vibrant Ambience</h3>
              <p className={styles.valueText}>
                Stunning green and gold interior styling paired with custom warm lighting to create a premium, cozy atmosphere.
              </p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueNumber}>02</div>
              <h3 className={styles.valueTitle}>Expert Mixology</h3>
              <p className={styles.valueText}>
                An upstairs cocktail lounge offering classic drinks and signature Mediterranean-inspired recipes.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueNumber}>03</div>
              <h3 className={styles.valueTitle}>Exclusive Events</h3>
              <p className={styles.valueText}>
                From bottomless weekend brunches and energetic DJ nights to private room hires tailored just for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
