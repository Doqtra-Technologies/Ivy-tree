"use client";

import { useState } from "react";
import styles from "./Gallery.module.css";

export default function Gallery({ images }) {
  const [activeImage, setActiveImage] = useState(null);

  const openLightbox = (img) => {
    setActiveImage(img);
    document.body.style.overflow = "hidden"; // Disable scroll when open
  };

  const closeLightbox = () => {
    setActiveImage(null);
    document.body.style.overflow = "auto"; // Re-enable scroll
  };

  return (
    <section id="gallery" className={`${styles.section} section-padding`}>
      <div className="container">
        {/* Section Heading */}
        <div className="heading-centered">
          <span className="subtitle">Visual Journey</span>
          <h2>Gallery</h2>
        </div>

        {/* Gallery Grid */}
        <div className={styles.grid}>
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={styles.item}
              onClick={() => openLightbox(img)}
            >
              <img src={img.src} alt={img.alt} className={styles.image} />
              <div className={styles.hoverOverlay}>
                <span className={styles.zoomIcon}>+</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.closeBtn} onClick={closeLightbox}>&times;</button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img src={activeImage.src} alt={activeImage.alt} className={styles.lightboxImg} />
            <p className={styles.caption}>{activeImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
