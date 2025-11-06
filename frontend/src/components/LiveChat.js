import React, { useState, useEffect } from 'react';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 👋 Welcome to Amol Electricals. How can I help you today?",
      sender: 'support',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    "Motor repair cost?",
    "Generator service?",
    "Emergency repair?",
    "Working hours?"
  ];

  const autoReplies = {
    "motor repair cost": "Motor repair costs vary based on the type and damage. Basic repairs start from ₹500. Would you like a free quote? 💰",
    "generator service": "We provide complete generator services including maintenance, repair, and parts replacement. Available 24/7! ⚡",
    "emergency repair": "We offer 24/7 emergency repair services! Call us at +91 98765 43210 for immediate assistance. 🚨",
    "working hours": "We're open Monday-Friday: 9AM-7PM, Saturday: 9AM-6PM, Sunday: 10AM-4PM. Emergency services available 24/7! 🕒"
  };

  const handleSendMessage = (messageText = newMessage) => {
    if (!messageText.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Auto-reply simulation
    setTimeout(() => {
      const lowerMessage = messageText.toLowerCase();
      let replyText = "Thank you for your message! Our team will get back to you shortly. For immediate assistance, please call +91 98765 43210. 📞";

      // Check for keywords
      Object.keys(autoReplies).forEach(key => {
        if (lowerMessage.includes(key)) {
          replyText = autoReplies[key];
        }
      });

      const supportMessage = {
        id: Date.now() + 1,
        text: replyText,
        sender: 'support',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, supportMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Chat Widget Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(45deg, #25d366, #128c7e)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 1000,
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
          animation: 'pulse 2s infinite',
          transition: 'all 0.3s ease'
        }}
      >
        <span style={{ fontSize: '1.5rem', color: 'white' }}>
          {isOpen ? '✕' : '💬'}
        </span>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '350px',
            height: '500px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
            animation: 'slideInUp 0.3s ease-out'
          }}
        >
          {/* Chat Header */}
          <div style={{
            background: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
            color: 'white',
            padding: '15px 20px',
            borderRadius: '20px 20px 0 0',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <div style={{ 
              width: '10px', 
              height: '10px', 
              background: '#2ecc71', 
              borderRadius: '50%',
              animation: 'pulse 1.5s infinite'
            }} />
            <div>
              <h4 style={{ margin: 0, fontSize: '16px' }}>Amol Electricals Support</h4>
              <p style={{ margin: 0, fontSize: '12px', opacity: 0.9 }}>Online now</p>
            </div>
          </div>

          {/* Messages Area */}
          <div style={{
            flex: 1,
            padding: '15px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%'
                }}
              >
                <div style={{
                  background: message.sender === 'user' 
                    ? 'linear-gradient(45deg, #3742fa, #2f3542)' 
                    : 'rgba(240, 240, 240, 0.9)',
                  color: message.sender === 'user' ? 'white' : '#2c3e50',
                  padding: '10px 15px',
                  borderRadius: message.sender === 'user' 
                    ? '15px 15px 5px 15px' 
                    : '15px 15px 15px 5px',
                  fontSize: '14px',
                  lineHeight: '1.4',
                  animation: 'fadeIn 0.3s ease-in'
                }}>
                  {message.text}
                </div>
                <div style={{
                  fontSize: '11px',
                  color: '#7f8c8d',
                  marginTop: '2px',
                  textAlign: message.sender === 'user' ? 'right' : 'left'
                }}>
                  {message.time}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{ alignSelf: 'flex-start' }}>
                <div style={{
                  background: 'rgba(240, 240, 240, 0.9)',
                  padding: '10px 15px',
                  borderRadius: '15px 15px 15px 5px',
                  fontSize: '14px',
                  color: '#7f8c8d'
                }}>
                  <span className="loading-dots">Typing</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies */}
          <div style={{
            padding: '10px 15px',
            borderTop: '1px solid rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '5px',
              marginBottom: '10px'
            }}>
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(reply)}
                  style={{
                    background: 'rgba(55, 66, 250, 0.1)',
                    color: '#3742fa',
                    border: '1px solid rgba(55, 66, 250, 0.2)',
                    padding: '5px 10px',
                    borderRadius: '15px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Message Input */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                style={{
                  flex: 1,
                  padding: '10px 15px',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  borderRadius: '20px',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <button
                onClick={() => handleSendMessage()}
                style={{
                  background: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px'
                }}
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default LiveChat;