const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['motor-winding', 'motor-repair', 'generator-repair', 'other'],
    required: true 
  },
  price: { type: Number, required: true }
});

module.exports = mongoose.model('Service', ServiceSchema);