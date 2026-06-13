import styles from "./SemiPrivate.module.css";

export default function SemiPrivate({ intro, rooms }) {
  return (
    <section id="semi-private" className="section-padding">
      <div className="container">
        {/* Section Heading */}
        <div className="heading-centered">
          <span className="subtitle">Exclusive Spaces</span>
          <h2>{intro.heading}</h2>
        </div>

        {/* Intro description */}
        <p className={styles.introText}>{intro.text}</p>

        {/* Rooms Grid */}
        <div className={styles.grid}>
          {rooms.map((room) => (
            <div key={room.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img 
                  src={room.imageUrl} 
                  alt={room.name} 
                  className={styles.image}
                />
                <div className={styles.capacityBadge}>
                  Capacity: {room.capacity}
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.roomName}>{room.name}</h3>
                <div className={styles.divider}></div>
                <p className={styles.roomDesc}>{room.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
