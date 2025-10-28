import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import '../App.css';


function LandingPage() {
   const [menuOpen, setMenuOpen] = useState(false);
  
 return (
    <div className="landing-page">
      {/* Header with Navigation */}
      <header className="landing-header">
        <nav className="landing-navbar">
          <div className="container">
            <div className="landing-nav-content">
              <Link to="/" className="landing-logo">TicketFlow</Link>

              {/* Hamburger Icon */}
              <div
                className={`landing-hamburger ${menuOpen ? 'active' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* Nav Buttons */}
              <div className={`landing-nav-buttons ${menuOpen ? 'open' : ''}`}>
                <Link to="/login" className="btn-login" onClick={() => setMenuOpen(false)}>Login</Link>
                <Link to="/signup" className="btn-start" onClick={() => setMenuOpen(false)}>Get Started</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="circle-1" aria-hidden="true"></div>
          <div className="circle-2" aria-hidden="true"></div>
          <div className="container">
            <div className="hero-content">
              <h1>Manage Tickets Effortlessly</h1>
              <p>A simple, powerful ticket management system that keeps your team organized</p>
              <div className="hero-buttons">
                <Link to="/signup" className="hero-primary">Get Started Free</Link>
                <a href="#features" className="hero-secondary">Learn More</a>
              </div>
            </div>
          </div>
          <svg className="wave" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </section>

        {/* Features Section */}
        <section id="features" className="features">
          <div className="container">
            <h2>Why Choose TicketFlow?</h2>
            <div className="feature-grid">
              <article className="feature-box">
                <div className="feature-icon" aria-hidden="true">✓</div>
                <h3>Simple & Intuitive</h3>
                <p>Clean interface that anyone can use without training. Get started in minutes.</p>
              </article>
              <article className="feature-box">
                <div className="feature-icon" aria-hidden="true">⚡</div>
                <h3>Lightning Fast</h3>
                <p>Quick ticket creation and updates. No lag, no waiting.</p>
              </article>
              <article className="feature-box">
                <div className="feature-icon" aria-hidden="true">📊</div>
                <h3>Real-time Stats</h3>
                <p>Track your ticket status with live dashboard updates.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Status Colors Section */}
        <section className="status-section">
          <div className="container">
            <h2>Clear Status Indicators</h2>
            <p className="section-subtitle">Every ticket has a clear status that everyone understands</p>
            <div className="status-grid">
              <article className="status-card">
                <span className="status-badge status-open">Open</span>
                <h3>Just Started</h3>
                <p>New tickets waiting to be addressed</p>
              </article>
              <article className="status-card">
                <span className="status-badge status-in_progress">In Progress</span>
                <h3>Being Worked On</h3>
                <p>Active tickets in development</p>
              </article>
              <article className="status-card">
                <span className="status-badge status-closed">Closed</span>
                <h3>All Done</h3>
                <p>Completed and resolved tickets</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 TicketFlow. Built with passion.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;