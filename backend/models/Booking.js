const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  serviceType: { type: String, required: true },
  motorType: { type: String },
  description: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', BookingSchema);