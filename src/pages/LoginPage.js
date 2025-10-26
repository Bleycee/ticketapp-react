import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
  
  if (!formData.email) {
    newErrors.email = 'Email is required';
  } else if (!/\S+@\S+\.com$/.test(formData.email)) {
    newErrors.email = 'Please enter a valid email ending in .com';
  }
  
  if (!formData.password) {
    newErrors.password = 'Password is required';
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
    
    localStorage.setItem('ticketapp_session', 'fake-token-12345');
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
                <Link to="/signup" className="btn-start">Get Started</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="auth-container">
        <div className="container">
          <article className="auth-box">
            <h2>Welcome Back</h2>
            <p>Login to access your tickets</p>
            
            <form onSubmit={handleSubmit}>
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
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <div className="error-message show">{errors.password}</div>}
              </div>
              
              <button type="submit" className="submit-btn">Login</button>
            </form>
            
            <p className="auth-link">
              Don't have an account? <Link to="/signup">Sign up</Link>
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

export default LoginPage;