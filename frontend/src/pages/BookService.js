import React, { useState } from 'react';
import axios from 'axios';

const BookService = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    serviceType: '',
    motorType: '',
    description: ''
  });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post('http://localhost:5000/api/bookings', formData);
      setMessage('Service booked successfully! We will contact you soon.');
      setFormData({
        customerName: '',
        phone: '',
        email: '',
        serviceType: '',
        motorType: '',
        description: ''
      });
    } catch (error) {
      setMessage('Error booking service. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    { value: 'motor-winding', label: '⚙️ Motor Winding', price: 'Starting ₹2,500' },
    { value: 'motor-repair', label: '🔧 Motor Repair', price: 'Starting ₹1,800' },
    { value: 'generator-repair', label: '⚡ Generator Repair', price: 'Starting ₹3,500' },
    { value: 'pump-repair', label: '💧 Pump Motor Repair', price: 'Starting ₹2,200' },
    { value: 'other', label: '🛠️ Other Services', price: 'Custom Quote' }
  ];

  return (
    <div style={{ minHeight: '100vh', padding: '40px 0' }}>
      {/* Header Section */}
      <section className="hero" style={{ padding: '60px 0 40px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="float" style={{ fontSize: '3rem', marginBottom: '20px' }}>📞</div>
          <h1 className="gradient-text fade-in">Book Your Service</h1>
          <p className="slide-up">Get expert electrical solutions delivered to your doorstep</p>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="card slide-up" style={{ margin: '0 20px' }}>
          {message && (
            <div className={`alert ${message.includes('Error') ? 'alert-error' : 'alert-success'} fade-in`}>
              <strong>{message.includes('Error') ? '❌ Error: ' : '✅ Success: '}</strong>
              {message}
            </div>
          )}

          {/* Service Selection Cards */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ marginBottom: '20px', color: '#2c3e50' }}>Select Service Type</h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '15px',
              marginBottom: '20px'
            }}>
              {serviceOptions.map((option, index) => (
                <div 
                  key={option.value}
                  onClick={() => setFormData({...formData, serviceType: option.value})}
                  className={`sparkle ${formData.serviceType === option.value ? 'pulse' : ''}`}
                  style={{
                    padding: '15px',
                    border: formData.serviceType === option.value ? '2px solid #ff6b6b' : '2px solid #e1e8ed',
                    borderRadius: '15px',
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    background: formData.serviceType === option.value ? 'rgba(255, 107, 107, 0.1)' : 'rgba(255, 255, 255, 0.5)',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '5px' }}>
                    {option.label}
                  </div>
                  <div style={{ fontSize: '12px', color: '#7f8c8d' }}>
                    {option.price}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div className="form-group">
                <label>👤 Customer Name *</label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>📞 Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>📧 Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email (optional)"
              />
            </div>

            <div className="form-group">
              <label>⚙️ Motor/Equipment Type</label>
              <input
                type="text"
                name="motorType"
                value={formData.motorType}
                onChange={handleChange}
                placeholder="e.g., AC Motor 1HP, DC Motor 2HP, Water Pump"
              />
            </div>

            <div className="form-group">
              <label>📝 Problem Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                placeholder="Please describe the issue in detail. Include symptoms, when it started, and any other relevant information."
                required
              />
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <button 
                type="submit" 
                className={`btn ${isSubmitting ? 'loading-dots' : 'pulse'}`}
                disabled={isSubmitting}
                style={{ 
                  fontSize: '16px', 
                  padding: '15px 40px',
                  minWidth: '200px'
                }}
              >
                {isSubmitting ? 'Booking Service' : '🚀 Book Service Now'}
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div style={{ 
            marginTop: '40px', 
            padding: '20px',
            background: 'rgba(55, 66, 250, 0.1)',
            borderRadius: '15px',
            textAlign: 'center'
          }}>
            <h4 style={{ marginBottom: '15px', color: '#2c3e50' }}>Need Immediate Help?</h4>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '1.5rem' }}>📞</div>
                <div style={{ fontWeight: '600' }}>Call Us</div>
                <div style={{ color: '#7f8c8d' }}>+91 98765 43210</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem' }}>🕰️</div>
                <div style={{ fontWeight: '600' }}>Working Hours</div>
                <div style={{ color: '#7f8c8d' }}>Mon-Sat: 9AM-7PM</div>
              </div>
              <div>
                <div style={{ fontSize: '1.5rem' }}>📍</div>
                <div style={{ fontWeight: '600' }}>Emergency</div>
                <div style={{ color: '#7f8c8d' }}>24/7 Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookService;