import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

function Dashboard() {
  const navigate = useNavigate();

  // Check if user is authenticated
  useEffect(() => {
    const token = localStorage.getItem('ticketapp_session');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('ticketapp_session');
    navigate('/');
  };

  return (
    <div className="dashboard-page">
      <header>
        <nav className="navbar">
          <div className="container">
            <div className="nav-content">
              <Link to="/dashboard" className="logo">TicketFlow</Link>
              <div className="nav-buttons">
                <Link to="/tickets" className="btn-start">View Tickets</Link>
                <button onClick={handleLogout} className="btn-logout">Logout</button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="dashboard-header">
          <div className="container">
            <h1>Dashboard</h1>
            <p>Here's an overview of your ticket status</p>
          </div>
        </section>

        <section className="dashboard-content">
          <div className="container">
            <div className="stats-grid">
              <article className="stat-card">
                <h3>Total Tickets</h3>
                <div className="stat-number">24</div>
              </article>
              <article className="stat-card">
                <h3>Open Tickets</h3>
                <div className="stat-number">8</div>
              </article>
              <article className="stat-card">
                <h3>In Progress</h3>
                <div className="stat-number">12</div>
              </article>
              <article className="stat-card">
                <h3>Resolved</h3>
                <div className="stat-number">4</div>
              </article>
            </div>

            <article className="quick-actions">
              <h2>Quick Actions</h2>
              <p>Jump to ticket management to create, edit, or view tickets</p>
              <Link to="/tickets" className="btn-action">Go to Ticket Management</Link>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 TicketFlow. Built with passion.</p>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;