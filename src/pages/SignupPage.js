import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    
   if (!formData.email) {
    newErrors.email = 'Email is required';
  } else if (!/\S+@\S+\.com$/.test(formData.email)) {
    newErrors.email = 'Please enter a valid email ending in .com';
  }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Save session token
    localStorage.setItem('ticketapp_session', 'fake-token-12345');
    
    // Redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="auth-page">
      <header>
        <nav className="navbar">
          <div className="container">
            <div className="nav-content">
              <Link to="/" className="logo">TicketFlow</Link>
              <div className="nav-buttons">
                <Link to="/login" className="btn-login">Login</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="auth-container">
        <div className="container">
          <article className="auth-box">
            <h2>Get Started</h2>
            <p>Create your account to start managing tickets</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="error-message show">{errors.name}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="error-message show">{errors.email}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <div className="error-message show">{errors.password}</div>}
              </div>
              
              <button type="submit" className="submit-btn">Create Account</button>
            </form>
            
            <p className="auth-link">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </article>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 TicketFlow. Built with passion.</p>
        </div>
      </footer>
    </div>
  );
}

export default SignupPage;