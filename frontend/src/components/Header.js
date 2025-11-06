import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ 
      background: 'rgba(255, 255, 255, 0.1)', 
      backdropFilter: 'blur(10px)',
      color: 'white', 
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container">
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
              fontSize: '1.5rem'
            }}>⚡</div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '700' }}>Amol Electricals</h1>
          </div>
          <div>
            <Link to="/" style={{ 
              color: 'white', 
              margin: '0 20px', 
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              padding: '8px 16px',
              borderRadius: '20px'
            }} onMouseOver={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
               onMouseOut={(e) => e.target.style.background = 'transparent'}>Home</Link>
            <Link to="/services" style={{ 
              color: 'white', 
              margin: '0 20px', 
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              padding: '8px 16px',
              borderRadius: '20px'
            }} onMouseOver={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
               onMouseOut={(e) => e.target.style.background = 'transparent'}>Services</Link>
            <Link to="/book" className="btn btn-secondary" style={{ margin: '0 10px' }}>Book Service</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;