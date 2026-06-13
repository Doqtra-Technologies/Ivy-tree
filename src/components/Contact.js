"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact({ details }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "2",
    room: "main-dining",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        guests: "2",
        room: "main-dining",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className={`${styles.section} section-padding`}>
      <div className="container">
        {/* Section Heading */}
        <div className="heading-centered">
          <span className="subtitle">Get In Touch</span>
          <h2>Contact Us</h2>
        </div>

        <div className={styles.layout}>
          {/* Info Side */}
          <div className={styles.infoCol}>
            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>Location</h3>
              <p className={styles.infoText}>{details.address}</p>
              <a 
                href={details.gmapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.mapLink}
              >
                Find Us On Google Maps &rarr;
              </a>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>Phone </h3>
              <p className={styles.infoText}>
                <a href={`tel:${details.phone.replace(/\s+/g, '')}`}>{details.phone}</a>
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.infoTitle}>Email</h3>
              <p className={styles.infoText}>
                <a href={`mailto:${details.email}`}>{details.email}</a>
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Make An Enquiry</h3>
              <div className={styles.goldDivider}></div>
              
              {submitted ? (
                <div className={styles.successMessage}>
                  <h4>Thank You!</h4>
                  <p>Your booking enquiry has been sent. Our team will contact you shortly to confirm your booking.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-gold">Send Another Enquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        placeholder="e.g. Jane Smith"
                        className={styles.input}
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        placeholder="e.g. jane@example.com"
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                        placeholder="e.g. 07123 456789"
                        className={styles.input}
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="date">Preferred Date</label>
                      <input 
                        type="date" 
                        id="date" 
                        name="date" 
                        value={formData.date} 
                        onChange={handleChange} 
                        required
                        className={styles.input}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="guests">Number of Guests</label>
                      <select 
                        id="guests" 
                        name="guests" 
                        value={formData.guests} 
                        onChange={handleChange} 
                        className={styles.select}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "11-20", "21-50", "50+"].map((num) => (
                          <option key={num} value={num}>{num} Guest{num !== 1 && 's'}</option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="room">Preferred Area</label>
                      <select 
                        id="room" 
                        name="room" 
                        value={formData.room} 
                        onChange={handleChange} 
                        className={styles.select}
                      >
                        <option value="main-dining">Main Dining Room</option>
                        <option value="velvet">Velvet Room (6-8 guests)</option>
                        <option value="apollo">Apollo Room (Up to 25 guests)</option>
                        <option value="luna">Luna Room (Up to 50 guests)</option>
                        <option value="cocktail-bar">Upstairs Cocktail Bar</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Special Requests / Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      rows={4} 
                      placeholder="Let us know if you are celebrating a special occasion or have any dietary restrictions."
                      className={styles.textarea}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-crimson" 
                    disabled={loading}
                    style={{ width: "100%", marginTop: "1rem" }}
                  >
                    {loading ? "Sending..." : "Submit Enquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
