import Link from "next/link";
import styles from "./Highlights.module.css";

export default function Highlights() {
  return (
    <section className={styles.highlightsSection}>
      <div className="container">
        {/* Section Heading */}
        <div className="heading-centered">
          <span className="subtitle">Discover Ivy Tree</span>
          <h2>Our Offerings</h2>
        </div>
        
        {/* Highlights Cards Grid */}
        <div className={styles.grid}>
          {/* Card 1: Semi Private */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img 
                src="/rooms/apollo.png" 
                alt="Semi Private Rooms at Ivy Tree" 
                className={styles.image} 
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Semi Private</h3>
              <p className={styles.cardText}>
                Dine in our exclusive semi private Rooms at Ivy Tree. Semi private here is a luxurious and indulgent experience.
              </p>
              <Link href="/semi-private" className="btn-gold">
                Explore Rooms
              </Link>
            </div>
          </div>

          {/* Card 2: Cocktail Bar */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img 
                src="/cocktail-bar.png" 
                alt="Upstairs Cocktail Bar at Ivy Tree" 
                className={styles.image} 
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Cocktail Bar</h3>
              <p className={styles.cardText}>
                Enjoy expertly crafted cocktails at our upstairs Cocktail Bar at Ivy Tree. A taste of the Mediterranean, served in the heart of Romford. Stylish interiors, a cozy ambiance, and a warm welcome await.
              </p>
              <Link href="/cocktail-bar" className="btn-gold">
                Upstairs Lounge
              </Link>
            </div>
          </div>

          {/* Card 3: Events */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img 
                src="/gallery/5.jpg" 
                alt="Weekly Events at Ivy Tree" 
                className={styles.image} 
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Events</h3>
              <p className={styles.cardText}>
                Experience our exciting weekly events and promotions. There is always something vibrant happening at Ivy Tree.
              </p>
              <div className={styles.eventsWrapper}>
                <span className={styles.eventItem}>Kids Eat Free</span>
                <span className={styles.eventItem}>Bottomless Prosecco Brunch</span>
                <span className={styles.eventItem}>DJ Nights</span>
              </div>
              <Link href="/whats-on" className="btn-gold">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
