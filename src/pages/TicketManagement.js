import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

function TicketManagement() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: 'Fix login bug',
      description: 'Users are unable to login with their credentials on mobile devices',
      status: 'open',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Update dashboard UI',
      description: 'Redesign the dashboard to match new brand guidelines',
      status: 'in_progress',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Add export feature',
      description: 'Allow users to export ticket data to CSV format',
      status: 'closed',
      priority: 'low'
    },
    {
      id: 4,
      title: 'Performance optimization',
      description: 'Improve page load time and reduce API response time',
      status: 'in_progress',
      priority: 'high'
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentTicket, setCurrentTicket] = useState(null);
  const [deleteTicketId, setDeleteTicketId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: '',
    priority: ''
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  // Check authentication
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

  const openCreateModal = () => {
    setCurrentTicket(null);
    setFormData({ title: '', description: '', status: '', priority: '' });
    setErrors({});
    setShowModal(true);
  };

  const openEditModal = (ticket) => {
    setCurrentTicket(ticket);
    setFormData({
      title: ticket.title,
      description: ticket.description,
      status: ticket.status,
      priority: ticket.priority
    });
    setErrors({});
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openDeleteModal = (ticketId) => {
    setDeleteTicketId(ticketId);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setDeleteTicketId(null);
  };

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

    if (!formData.title || formData.title.trim() === '') {
      newErrors.title = 'Title is required';
    }

    if (!formData.status) {
      newErrors.status = 'Status is required';
    } else if (!['open', 'in_progress', 'closed'].includes(formData.status)) {
      newErrors.status = 'Status must be: open, in_progress, or closed';
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

    if (currentTicket) {
      // Update existing ticket
      setTickets(tickets.map(ticket =>
        ticket.id === currentTicket.id
          ? { ...ticket, ...formData }
          : ticket
      ));
      showToast('Ticket updated successfully!', 'success');
    } else {
      // Create new ticket
      const newTicket = {
        id: Date.now(),
        ...formData
      };
      setTickets([...tickets, newTicket]);
      showToast('Ticket created successfully!', 'success');
    }

    closeModal();
  };

  const confirmDelete = () => {
    setTickets(tickets.filter(ticket => ticket.id !== deleteTicketId));
    showToast('Ticket deleted successfully!', 'success');
    closeDeleteModal();
  };

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: '' });
    }, 3000);
  };

  const getStatusLabel = (status) => {
    if (status === 'in_progress') return 'In Progress';
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="ticket-page">
      <header>
        <nav className="navbar">
          <div className="container">
            <div className="nav-content">
              <Link to="/dashboard" className="logo">TicketFlow</Link>
              <div className="nav-buttons">
                <Link to="/dashboard" className="btn-start">Dashboard</Link>
                <button onClick={handleLogout} className="btn-logout">Logout</button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="ticket-content">
        <div className="container">
          <div className="ticket-header">
            <h1>Ticket Management</h1>
            <button className="btn-create" onClick={openCreateModal}>
              + Create New Ticket
            </button>
          </div>

          <div className="tickets-grid">
            {tickets.map(ticket => (
              <article key={ticket.id} className="ticket-card">
                <div className="ticket-card-header">
                  <div>
                    <h3>{ticket.title}</h3>
                    <span className={`status-badge status-${ticket.status}`}>
                      {getStatusLabel(ticket.status)}
                    </span>
                  </div>
                </div>
                <p className="ticket-description">{ticket.description}</p>
                <div className="ticket-actions">
                  <button className="btn-edit" onClick={() => openEditModal(ticket)}>
                    Edit
                  </button>
                  <button className="btn-delete" onClick={() => openDeleteModal(ticket.id)}>
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 TicketFlow. Built with passion.</p>
        </div>
      </footer>

      {/* Create/Edit Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={(e) => e.target.className === 'modal-overlay' && closeModal()}>
          <div className="modal">
            <h2>{currentTicket ? 'Edit Ticket' : 'Create New Ticket'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="title">Title *</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Enter ticket title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                  {errors.title && <div className="error-message show">{errors.title}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="status">Status *</label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="">Select status</option>
                    <option value="open">Open</option>
                    <option value="in_progress">In Progress</option>
                    <option value="closed">Closed</option>
                  </select>
                  {errors.status && <div className="error-message show">{errors.status}</div>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Describe the ticket..."
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="priority">Priority</label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                >
                  <option value="">Select priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit" className="btn-save">Save Ticket</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal-overlay" onClick={(e) => e.target.className === 'modal-overlay' && closeDeleteModal()}>
          <div className="modal delete-modal">
            <h2 className="delete-title">⚠️ Delete Ticket?</h2>
            <p className="delete-description">
              Are you sure you want to delete this ticket? This action cannot be undone.
            </p>
            <div className="ticket-preview">
              <strong>{tickets.find(t => t.id === deleteTicketId)?.title}</strong>
            </div>
            <div className="modal-actions">
              <button type="button" className="btn-cancel" onClick={closeDeleteModal}>
                Cancel
              </button>
              <button type="button" className="btn-delete-confirm" onClick={confirmDelete}>
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast.show && (
        <div className={`toast show ${toast.type}`}>
          {toast.message}
        </div>
      )}
    </div>
  );
}

export default TicketManagement;