import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Kumar Industries",
      rating: 5,
      text: "Excellent motor winding service! My 3-phase motor works like new. Professional work and fair pricing.",
      image: "👨‍💼"
    },
    {
      name: "Priya Sharma",
      business: "Sharma Textiles",
      rating: 5,
      text: "Quick generator repair service. They fixed our diesel generator in just 2 hours. Highly recommended!",
      image: "👩‍💼"
    },
    {
      name: "Amit Patel",
      business: "Patel Manufacturing",
      rating: 5,
      text: "Best motor repair shop in the area. Quality work, honest pricing, and excellent customer service.",
      image: "👨‍🔧"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
          What Our Customers Say 💬
        </h2>
        
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '20px'
        }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
              style={{
                display: index === currentIndex ? 'block' : 'none',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '40px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                textAlign: 'center',
                animation: index === currentIndex ? 'fadeIn 0.5s ease-in-out' : 'none'
              }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>
                {testimonial.image}
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} style={{ 
                    color: '#ffd700', 
                    fontSize: '1.5rem',
                    animation: `bounce 0.5s ease-in-out ${i * 0.1}s`
                  }}>⭐</span>
                ))}
              </div>
              
              <p style={{ 
                fontSize: '1.2rem', 
                color: 'white', 
                marginBottom: '20px',
                fontStyle: 'italic',
                lineHeight: '1.6'
              }}>
                "{testimonial.text}"
              </p>
              
              <h4 style={{ color: '#ff6b6b', fontSize: '1.3rem', marginBottom: '5px' }}>
                {testimonial.name}
              </h4>
              <p style={{ color: '#7f8c8d' }}>{testimonial.business}</p>
            </div>
          ))}
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginTop: '30px',
          gap: '10px'
        }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: index === currentIndex ? '#ff6b6b' : 'rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;