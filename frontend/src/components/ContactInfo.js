import React from 'react';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: '📞',
      title: 'Call Us',
      info: '+91 98765 43210',
      action: 'tel:+919876543210',
      color: '#2ecc71'
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      info: 'Quick Support',
      action: 'https://wa.me/919876543210',
      color: '#25d366'
    },
    {
      icon: '📧',
      title: 'Email',
      info: 'info@amolelectricals.com',
      action: 'mailto:info@amolelectricals.com',
      color: '#3498db'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      info: 'Shop No. 15, Industrial Area',
      action: '#',
      color: '#e74c3c'
    }
  ];

  const workingHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 6:00 PM' },
    { day: 'Sunday', time: '10:00 AM - 4:00 PM' }
  ];

  return (
    <section style={{ padding: '80px 0', background: 'rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        <h2 style={{ 
          textAlign: 'center', 
          color: 'white', 
          fontSize: '2.5rem', 
          marginBottom: '50px',
          fontWeight: '700'
        }}>
          Get In Touch 📞
        </h2>

        {/* Contact Methods */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '30px',
          marginBottom: '60px'
        }}>
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.action}
              target={method.action.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="contact-card"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '30px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                textAlign: 'center',
                textDecoration: 'none',
                color: 'white',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '15px',
                animation: 'bounce 2s infinite'
              }}>
                {method.icon}
              </div>
              <h3 style={{ 
                fontSize: '1.3rem', 
                marginBottom: '10px',
                color: method.color
              }}>
                {method.title}
              </h3>
              <p style={{ color: '#7f8c8d', fontSize: '14px' }}>
                {method.info}
              </p>
            </a>
          ))}
        </div>

        {/* Emergency Contact */}
        <div style={{ 
          background: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
          borderRadius: '20px',
          padding: '30px',
          textAlign: 'center',
          marginBottom: '50px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            fontSize: '1.5rem',
            animation: 'pulse 1.5s infinite'
          }}>
            🚨
          </div>
          
          <h3 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '15px',
            color: 'white'
          }}>
            Emergency Repair Service
          </h3>
          <p style={{ 
            marginBottom: '20px',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            Motor breakdown? Generator not working? Call us now!
          </p>
          <a 
            href="tel:+919876543210"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              padding: '12px 30px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              transition: 'all 0.3s ease'
            }}
          >
            📞 Emergency: +91 98765 43210
          </a>
        </div>

        {/* Working Hours */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '40px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <h3 style={{ 
            textAlign: 'center',
            color: 'white', 
            fontSize: '1.8rem', 
            marginBottom: '30px',
            fontWeight: '600'
          }}>
            🕒 Working Hours
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '20px'
          }}>
            {workingHours.map((schedule, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '15px 20px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '15px',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <span style={{ color: 'white', fontWeight: '500' }}>
                  {schedule.day}
                </span>
                <span style={{ color: '#ff6b6b', fontWeight: '600' }}>
                  {schedule.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;