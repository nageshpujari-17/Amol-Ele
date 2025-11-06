import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/services');
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const defaultServices = [
    { 
      name: 'AC Motor Winding', 
      category: 'motor-winding', 
      description: 'Complete AC motor rewinding service with high-quality copper wire and precision techniques', 
      price: 2500,
      icon: '⚙️',
      features: ['Single Phase', '3 Phase', 'High Voltage', 'Low Voltage']
    },
    { 
      name: 'DC Motor Repair', 
      category: 'motor-repair', 
      description: 'Comprehensive DC motor maintenance, repair and performance optimization', 
      price: 1800,
      icon: '🔧',
      features: ['Brush Replacement', 'Commutator Repair', 'Bearing Service', 'Testing']
    },
    { 
      name: 'Generator Service', 
      category: 'generator-repair', 
      description: 'Professional generator maintenance and repair for reliable power backup', 
      price: 3500,
      icon: '⚡',
      features: ['Diesel Generators', 'Petrol Generators', 'AVR Repair', 'Load Testing']
    },
    {
      name: 'Pump Motor Repair',
      category: 'motor-repair',
      description: 'Specialized water pump motor repair and maintenance services',
      price: 2200,
      icon: '💧',
      features: ['Submersible Pumps', 'Centrifugal Pumps', 'Impeller Repair', 'Seal Replacement']
    },
    {
      name: 'Industrial Motor Service',
      category: 'motor-winding',
      description: 'Heavy-duty industrial motor winding and repair for manufacturing units',
      price: 4500,
      icon: '🏭',
      features: ['Large Motors', 'Custom Winding', 'Vibration Analysis', 'Efficiency Testing']
    },
    {
      name: 'Alternator Repair',
      category: 'generator-repair',
      description: 'Car and truck alternator repair and rewinding services',
      price: 1500,
      icon: '🚗',
      features: ['Car Alternators', 'Truck Alternators', 'Diode Replacement', 'Voltage Regulation']
    }
  ];

  const displayServices = services.length > 0 ? services : defaultServices;
  const categories = ['all', 'motor-winding', 'motor-repair', 'generator-repair'];
  
  const filteredServices = selectedCategory === 'all' 
    ? displayServices 
    : displayServices.filter(service => service.category === selectedCategory);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'motor-winding': return '⚙️';
      case 'motor-repair': return '🔧';
      case 'generator-repair': return '⚡';
      default: return '🛠️';
    }
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '50vh',
        color: 'white',
        fontSize: '1.5rem'
      }}>
        <div className="loading-dots">Loading services</div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', padding: '40px 0' }}>
      {/* Header Section */}
      <section className="hero" style={{ padding: '60px 0' }}>
        <div className="container">
          <h1 className="gradient-text fade-in">Our Professional Services</h1>
          <p className="slide-up">Expert electrical solutions for all your motor and generator needs</p>
        </div>
      </section>

      <div className="container">
        {/* Category Filter */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '40px',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`btn ${selectedCategory === category ? '' : 'btn-secondary'}`}
              style={{
                padding: '10px 20px',
                fontSize: '14px',
                textTransform: 'capitalize',
                opacity: selectedCategory === category ? 1 : 0.7
              }}
            >
              {getCategoryIcon(category)} {category === 'all' ? 'All Services' : category.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {filteredServices.map((service, index) => (
            <div 
              key={index} 
              className="service-card sparkle slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon icon-rotate">
                {service.icon || getCategoryIcon(service.category)}
              </div>
              
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: '#2c3e50' }}>
                {service.name}
              </h3>
              
              <p style={{ marginBottom: '20px', color: '#7f8c8d', lineHeight: '1.6' }}>
                {service.description}
              </p>
              
              {service.features && (
                <div style={{ marginBottom: '20px' }}>
                  {service.features.map((feature, idx) => (
                    <span key={idx} style={{
                      display: 'inline-block',
                      background: 'linear-gradient(45deg, #3742fa, #2f3542)',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '11px',
                      margin: '2px',
                      fontWeight: '500'
                    }}>
                      {feature}
                    </span>
                  ))}
                </div>
              )}
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <div className="price-tag">
                  ₹{service.price}
                </div>
                <span className="category-badge">
                  {service.category?.replace('-', ' ')}
                </span>
              </div>
              
              <Link 
                to="/book" 
                className="btn pulse" 
                style={{ 
                  width: '100%', 
                  textAlign: 'center',
                  fontSize: '14px',
                  padding: '10px'
                }}
              >
                Book This Service
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '60px',
          padding: '40px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>Need Custom Service?</h2>
          <p style={{ color: 'white', opacity: 0.9, marginBottom: '30px' }}>
            Don't see what you're looking for? We provide custom electrical solutions for unique requirements.
          </p>
          <Link to="/book" className="btn bounce">
            Contact Us for Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;