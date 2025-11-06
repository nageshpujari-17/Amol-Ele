import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import ContactInfo from '../components/ContactInfo';
import CostCalculator from '../components/CostCalculator';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: 'Motor Winding',
      icon: '⚙️',
      description: 'Expert AC/DC motor winding services with quality materials and precision work.',
      features: ['AC Motors', 'DC Motors', 'Single Phase', '3 Phase']
    },
    {
      title: 'Motor Repair',
      icon: '🔧',
      description: 'Complete motor repair services for all types of industrial and domestic motors.',
      features: ['Bearing Replacement', 'Rotor Repair', 'Stator Repair', 'Testing']
    },
    {
      title: 'Generator Repair',
      icon: '⚡',
      description: 'Professional generator maintenance and repair services for reliable power solutions.',
      features: ['Diesel Generators', 'Petrol Generators', 'Maintenance', 'Parts']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className={`hero fade-in ${isVisible ? 'slide-up' : ''}`}>
        <div className="container">
          <div className="float">
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>⚡🔧⚙️</div>
          </div>
          <h1 className="gradient-text">Welcome to Amol Electricals</h1>
          <p>Professional Motor Winding, Repair & Generator Services</p>
          <div style={{ marginTop: '30px' }}>
            <Link to="/book" className="btn pulse" style={{ marginRight: '20px' }}>Book Service Now</Link>
            <Link to="/services" className="btn btn-secondary">View Services</Link>
          </div>
          
          {/* Floating Elements */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            fontSize: '2rem',
            opacity: 0.3,
            animation: 'float 4s ease-in-out infinite'
          }}>⚡</div>
          <div style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            fontSize: '1.5rem',
            opacity: 0.3,
            animation: 'float 3s ease-in-out infinite reverse'
          }}>🔧</div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '80px 0', background: 'rgba(255, 255, 255, 0.1)' }}>
        <div className="container">
          <h2 style={{ 
            textAlign: 'center', 
            color: 'white', 
            fontSize: '2.5rem', 
            marginBottom: '50px',
            fontWeight: '700'
          }}>Our Expert Services</h2>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`service-card sparkle ${isVisible ? 'slide-up' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="service-icon icon-rotate">
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#2c3e50' }}>
                  {service.title}
                </h3>
                <p style={{ marginBottom: '20px', color: '#7f8c8d' }}>
                  {service.description}
                </p>
                <div style={{ marginBottom: '20px' }}>
                  {service.features.map((feature, idx) => (
                    <span key={idx} style={{
                      display: 'inline-block',
                      background: 'linear-gradient(45deg, #3742fa, #2f3542)',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      margin: '2px',
                      fontWeight: '500'
                    }}>
                      {feature}
                    </span>
                  ))}
                </div>
                <Link to="/book" className="btn" style={{ fontSize: '14px', padding: '8px 20px' }}>
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '30px',
            textAlign: 'center'
          }}>
            {[
              { number: '500+', label: 'Motors Repaired', icon: '⚙️' },
              { number: '15+', label: 'Years Experience', icon: '🏆' },
              { number: '100+', label: 'Happy Customers', icon: '😊' },
              { number: '24/7', label: 'Support Available', icon: '📞' }
            ].map((stat, index) => (
              <div key={index} className="card bounce" style={{ 
                animationDelay: `${index * 0.3}s`,
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{stat.icon}</div>
                <h3 style={{ fontSize: '2rem', color: '#ff6b6b', marginBottom: '5px' }}>
                  {stat.number}
                </h3>
                <p style={{ color: '#7f8c8d', fontWeight: '500' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Cost Calculator Section */}
      <CostCalculator />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Info Section */}
      <ContactInfo />
    </div>
  );
};

export default Home;