"use client";

import { useEffect, useState } from "react";
import styles from "./Footer.module.css";

export default function Footer({ logoUrl, openingHours, socialLinks }) {
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const todayIndex = new Date().getDay();
    setCurrentDay(days[todayIndex]);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <img src={logoUrl} alt="Ivy Tree Logo" className={styles.logo} />
            <p className={styles.tagline}>
              Experience the vibrant essence of Mediterranean dining in the heart of Romford.
            </p>
            {/* Social Icons */}
            <div className={styles.socials}>
              {socialLinks.instagram && (
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  IG
                </a>
              )}
              {socialLinks.facebook && (
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  FB
                </a>
              )}
              {socialLinks.tiktok && (
                <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  TT
                </a>
              )}
            </div>
          </div>

          {/* Hours Col */}
          <div className={styles.hoursCol}>
            <h3 className={styles.title}>Opening Hours </h3>
            <div className={styles.divider}></div>
            <ul className={styles.hoursList}>
              {openingHours.map((item) => {
                const isToday = item.day.toLowerCase() === currentDay.toLowerCase();
                return (
                  <li 
                    key={item.day} 
                    className={`${styles.hoursItem} ${isToday ? styles.today : ""}`}
                  >
                    <span className={styles.day}>{item.day}</span>
                    <span className={styles.dots}></span>
                    <span className={styles.time}>{item.hours}</span>
                    {isToday && <span className={styles.todayLabel}>Today</span>}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} The Ivy Tree Romford. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
