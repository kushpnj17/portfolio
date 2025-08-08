import React from 'react';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Intro">
      <p className="hero-greeting">Hi, my name is</p>
      <h1 className="hero-name">Kush Patel</h1>
      <h2 className="hero-tagline">
        I build software that solves real-world problems and helps real people.
      </h2>

      <div className="hero-actions">
        <a
          href="mailto:kush@example.com"
          className="btn btn-outline"
          aria-label="Email Kush"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/kush-patel-566729232/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline"
          aria-label="LinkedIn profile"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/kushpnj17"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline"
          aria-label="GitHub profile"
        >
          GitHub
        </a>
        <a
          href="/kushpatel_resume_20_os.pdf"
          download
          className="btn btn-solid"
          aria-label="Download Resume PDF"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
