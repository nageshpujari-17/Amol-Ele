import React, { useState } from 'react';

const CostCalculator = () => {
  const [selectedService, setSelectedService] = useState('');
  const [motorType, setMotorType] = useState('');
  const [horsepower, setHorsepower] = useState('');
  const [urgency, setUrgency] = useState('normal');
  const [estimatedCost, setEstimatedCost] = useState(null);

  const servicePrices = {
    'motor-winding': {
      base: 800,
      multipliers: {
        'single-phase': 1,
        '3-phase': 1.5,
        'dc-motor': 1.2
      }
    },
    'motor-repair': {
      base: 500,
      multipliers: {
        'single-phase': 1,
        '3-phase': 1.3,
        'dc-motor': 1.1
      }
    },
    'generator-repair': {
      base: 1200,
      multipliers: {
        'diesel': 1.2,
        'petrol': 1,
        'inverter': 0.8
      }
    }
  };

  const hpMultipliers = {
    '0.5': 0.8,
    '1': 1,
    '2': 1.3,
    '3': 1.5,
    '5': 2,
    '7.5': 2.5,
    '10+': 3
  };

  const urgencyMultipliers = {
    'normal': 1,
    'urgent': 1.3,
    'emergency': 1.8
  };

  const calculateCost = () => {
    if (!selectedService || !motorType || !horsepower) {
      alert('Please fill all fields to calculate cost');
      return;
    }

    const basePrice = servicePrices[selectedService].base;
    const typeMultiplier = servicePrices[selectedService].multipliers[motorType] || 1;
    const hpMultiplier = hpMultipliers[horsepower] || 1;
    const urgencyMultiplier = urgencyMultipliers[urgency];

    const totalCost = Math.round(basePrice * typeMultiplier * hpMultiplier * urgencyMultiplier);
    setEstimatedCost(totalCost);
  };

  return (
    <section style={{ padding: '80px 0', background: 'rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        <h2 style={{ 
          textAlign: 'center', 
          color: 'white', 
          fontSize: '2.5rem', 
          marginBottom: '30px',
          fontWeight: '700'
        }}>
          Service Cost Calculator 💰
        </h2>
        
        <p style={{ 
          textAlign: 'center', 
          color: '#7f8c8d', 
          marginBottom: '50px',
          fontSize: '1.1rem'
        }}>
          Get an instant estimate for your motor or generator service
        </p>

        <div style={{ 
          maxWidth: '600px', 
          margin: '0 auto',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '40px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          {/* Service Type */}
          <div style={{ marginBottom: '25px' }}>
            <label style={{ 
              display: 'block', 
              color: 'white', 
              marginBottom: '10px',
              fontSize: '16px',
              fontWeight: '600'
            }}>
              🔧 Service Type
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '14px'
              }}
            >
              <option value="">Select Service</option>
              <option value="motor-winding">Motor Winding</option>
              <option value="motor-repair">Motor Repair</option>
              <option value="generator-repair">Generator Repair</option>
            </select>
          </div>

          {/* Motor/Generator Type */}
          <div style={{ marginBottom: '25px' }}>
            <label style={{ 
              display: 'block', 
              color: 'white', 
              marginBottom: '10px',
              fontSize: '16px',
              fontWeight: '600'
            }}>
              ⚙️ Type
            </label>
            <select
              value={motorType}
              onChange={(e) => setMotorType(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '14px'
              }}
            >
              <option value="">Select Type</option>
              {selectedService === 'generator-repair' ? (
                <>
                  <option value="diesel">Diesel Generator</option>
                  <option value="petrol">Petrol Generator</option>
                  <option value="inverter">Inverter Generator</option>
                </>
              ) : (
                <>
                  <option value="single-phase">Single Phase</option>
                  <option value="3-phase">3 Phase</option>
                  <option value="dc-motor">DC Motor</option>
                </>
              )}
            </select>
          </div>

          {/* Horsepower */}
          <div style={{ marginBottom: '25px' }}>
            <label style={{ 
              display: 'block', 
              color: 'white', 
              marginBottom: '10px',
              fontSize: '16px',
              fontWeight: '600'
            }}>
              ⚡ Power Rating (HP)
            </label>
            <select
              value={horsepower}
              onChange={(e) => setHorsepower(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '14px'
              }}
            >
              <option value="">Select Power</option>
              <option value="0.5">0.5 HP</option>
              <option value="1">1 HP</option>
              <option value="2">2 HP</option>
              <option value="3">3 HP</option>
              <option value="5">5 HP</option>
              <option value="7.5">7.5 HP</option>
              <option value="10+">10+ HP</option>
            </select>
          </div>

          {/* Urgency */}
          <div style={{ marginBottom: '30px' }}>
            <label style={{ 
              display: 'block', 
              color: 'white', 
              marginBottom: '10px',
              fontSize: '16px',
              fontWeight: '600'
            }}>
              🚨 Service Urgency
            </label>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              {[
                { key: 'normal', label: 'Normal (3-5 days)', icon: '🕒' },
                { key: 'urgent', label: 'Urgent (1-2 days)', icon: '⏰' },
                { key: 'emergency', label: 'Emergency (Same day)', icon: '🚨' }
              ].map((option) => (
                <label key={option.key} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  cursor: 'pointer',
                  color: 'white',
                  fontSize: '14px'
                }}>
                  <input
                    type="radio"
                    name="urgency"
                    value={option.key}
                    checked={urgency === option.key}
                    onChange={(e) => setUrgency(e.target.value)}
                    style={{ marginRight: '8px' }}
                  />
                  {option.icon} {option.label}
                </label>
              ))}
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculateCost}
            style={{
              width: '100%',
              background: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
              color: 'white',
              border: 'none',
              padding: '15px',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              marginBottom: '20px',
              transition: 'all 0.3s ease'
            }}
          >
            Calculate Estimated Cost 🧮
          </button>

          {/* Result */}
          {estimatedCost && (
            <div style={{
              background: 'linear-gradient(45deg, #2ecc71, #27ae60)',
              color: 'white',
              padding: '20px',
              borderRadius: '15px',
              textAlign: 'center',
              animation: 'zoomIn 0.5s ease-out'
            }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '1.5rem' }}>
                💰 Estimated Cost
              </h3>
              <p style={{ 
                margin: '0 0 15px 0', 
                fontSize: '2rem', 
                fontWeight: '700'
              }}>
                ₹{estimatedCost}
              </p>
              <p style={{ 
                margin: 0, 
                fontSize: '14px', 
                opacity: 0.9 
              }}>
                *Final cost may vary based on actual condition and parts required
              </p>
            </div>
          )}

          {/* Additional Info */}
          <div style={{ 
            marginTop: '20px', 
            padding: '15px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h4 style={{ color: 'white', margin: '0 0 10px 0', fontSize: '14px' }}>
              📋 What's Included:
            </h4>
            <ul style={{ 
              color: '#7f8c8d', 
              fontSize: '12px', 
              margin: 0, 
              paddingLeft: '20px' 
            }}>
              <li>Free inspection and diagnosis</li>
              <li>Quality parts and materials</li>
              <li>Expert workmanship</li>
              <li>6-month service warranty</li>
              <li>Free pickup and delivery*</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;