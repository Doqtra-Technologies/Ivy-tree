"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar({ logoUrl, reservationUrl }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logoContainer} onClick={() => setIsOpen(false)}>
          <img src={logoUrl} alt="Ivy Tree Logo" className={styles.logo} />
        </Link>

        {/* Burger Button */}
        <button 
          className={`${styles.burger} ${isOpen ? styles.burgerOpen : ""}`} 
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/semi-private" onClick={() => setIsOpen(false)}>Semi Private</Link></li>
            <li><Link href="/cocktail-bar" onClick={() => setIsOpen(false)}>Cocktail Bar</Link></li>
            <li><Link href="/whats-on" onClick={() => setIsOpen(false)}>What's On</Link></li>
            <li><Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li className={styles.mobileCta}>
              <a 
                href={reservationUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-gold"
                onClick={() => setIsOpen(false)}
              >
                Reservation
              </a>
            </li>
          </ul>
        </nav>

        {/* Desktop CTA Button */}
        <div className={styles.desktopCta}>
          <a 
            href={reservationUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-gold"
          >
            Reservation
          </a>
        </div>
      </div>
    </header>
  );
}
