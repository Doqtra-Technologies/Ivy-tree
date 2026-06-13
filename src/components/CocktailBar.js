import styles from "./CocktailBar.module.css";

export default function CocktailBar({ heading, text, imageUrl }) {
  return (
    <section id="cocktail-bar" className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          {/* Text Column */}
          <div className={styles.textCol}>
            <span className={styles.subtitle}>Upstairs Lounge</span>
            <h2 className={styles.heading}>{heading}</h2>
            <div className={styles.goldLine}></div>
            <p className={styles.paragraph}>{text}</p>
          </div>

          {/* Image Column with Frame */}
          <div className={styles.imageCol}>
            <div className={styles.frameContainer}>
              <div className={styles.frameLine}></div>
              <img 
                src={imageUrl} 
                alt="Upstairs Cocktail Bar at Ivy Tree" 
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
