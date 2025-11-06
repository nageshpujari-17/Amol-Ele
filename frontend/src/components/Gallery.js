import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'motor-winding',
      title: 'AC Motor Rewinding',
      before: '🔧',
      after: '⚡',
      description: '3-phase AC motor complete rewinding service'
    },
    {
      id: 2,
      category: 'motor-repair',
      title: 'DC Motor Repair',
      before: '⚙️',
      after: '✨',
      description: 'DC motor bearing and brush replacement'
    },
    {
      id: 3,
      category: 'generator',
      title: 'Generator Maintenance',
      before: '🔋',
      after: '💡',
      description: 'Diesel generator complete overhaul'
    },
    {
      id: 4,
      category: 'motor-winding',
      title: 'Single Phase Motor',
      before: '🔌',
      after: '⚡',
      description: 'Single phase motor winding replacement'
    },
    {
      id: 5,
      category: 'motor-repair',
      title: 'Industrial Motor',
      before: '🏭',
      after: '🔧',
      description: 'Heavy duty industrial motor repair'
    },
    {
      id: 6,
      category: 'generator',
      title: 'Portable Generator',
      before: '⚡',
      after: '🔋',
      description: 'Portable generator engine repair'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Work', icon: '🔧' },
    { key: 'motor-winding', label: 'Motor Winding', icon: '⚙️' },
    { key: 'motor-repair', label: 'Motor Repair', icon: '🔨' },
    { key: 'generator', label: 'Generator', icon: '⚡' }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container">
        <h2 style={{ 
          textAlign: 'center', 
          color: 'white', 
          fontSize: '2.5rem', 
          marginBottom: '30px',
          fontWeight: '700'
        }}>
          Our Work Gallery 📸
        </h2>
        
        <p style={{ 
          textAlign: 'center', 
          color: '#7f8c8d', 
          marginBottom: '50px',
          fontSize: '1.1rem'
        }}>
          See the quality of our motor and generator repair work
        </p>

        {/* Filter Buttons */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          gap: '15px',
          marginBottom: '50px'
        }}>
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`filter-btn ${filter === category.key ? 'active' : ''}`}
              style={{
                background: filter === category.key 
                  ? 'linear-gradient(45deg, #ff6b6b, #ee5a52)' 
                  : 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '12px 24px',
                borderRadius: '25px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
            >
              {category.icon} {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px'
        }}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-item fade-in"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '25px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                animationDelay: `${index * 0.1}s`
              }}
              onClick={() => setSelectedImage(item)}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '20px'
              }}>
                <div style={{ 
                  fontSize: '3rem',
                  padding: '15px',
                  background: 'rgba(255, 107, 107, 0.2)',
                  borderRadius: '15px'
                }}>
                  {item.before}
                </div>
                
                <div style={{ 
                  fontSize: '2rem',
                  animation: 'pulse 2s infinite'
                }}>
                  ➡️
                </div>
                
                <div style={{ 
                  fontSize: '3rem',
                  padding: '15px',
                  background: 'rgba(46, 213, 115, 0.2)',
                  borderRadius: '15px'
                }}>
                  {item.after}
                </div>
              </div>
              
              <h3 style={{ 
                color: 'white', 
                fontSize: '1.3rem', 
                marginBottom: '10px',
                fontWeight: '600'
              }}>
                {item.title}
              </h3>
              
              <p style={{ 
                color: '#7f8c8d', 
                fontSize: '14px',
                lineHeight: '1.5'
              }}>
                {item.description}
              </p>
              
              <div style={{ 
                marginTop: '15px',
                padding: '8px 15px',
                background: 'linear-gradient(45deg, #3742fa, #2f3542)',
                borderRadius: '20px',
                display: 'inline-block',
                fontSize: '12px',
                color: 'white',
                fontWeight: '500'
              }}>
                View Details
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              animation: 'fadeIn 0.3s ease-in-out'
            }}
            onClick={() => setSelectedImage(null)}
          >
            <div 
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '40px',
                maxWidth: '500px',
                margin: '20px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                textAlign: 'center'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '30px',
                fontSize: '4rem'
              }}>
                <div>{selectedImage.before}</div>
                <div style={{ fontSize: '2rem' }}>➡️</div>
                <div>{selectedImage.after}</div>
              </div>
              
              <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '15px' }}>
                {selectedImage.title}
              </h3>
              
              <p style={{ color: '#7f8c8d', marginBottom: '25px', lineHeight: '1.6' }}>
                {selectedImage.description}
              </p>
              
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  background: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
                  color: 'white',
                  border: 'none',
                  padding: '12px 30px',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;