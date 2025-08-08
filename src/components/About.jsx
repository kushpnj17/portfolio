import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <section className="about" id="about" aria-label="About Kush">
      <h2>About Me</h2>
      <p>
        I’m a software engineer focused on full‑stack development. I enjoy building well‑designed,
        performant products—from APIs and data models to thoughtful UIs. Recently, I’ve been working on
        real‑time inventory tools and a healthcare app that streamlines patient‑provider communication.
      </p>
      {/* Add highlights, skills grid, or timeline here */}
    </section>
  );
}
