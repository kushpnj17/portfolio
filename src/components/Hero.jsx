import React from 'react';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <p className="hero-greeting">Hi, my name is</p>
      <h1 className="hero-name">Kush Patel</h1>
      <h2 className="hero-tagline">I build software that solves real-world problems.</h2>
      <p className="hero-bio">
        I’m a software engineer focused on full-stack development, currently working on tools
        that help businesses run more efficiently.
      </p>
      <a href="#projects" className="hero-cta">Check out my work ↓</a>
    </section>
  );
}
