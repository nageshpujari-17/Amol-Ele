# Amol Electricals Website

A professional website for Amol Electricals - specializing in motor winding, motor repairs, and generator services.

## Features

- **Frontend**: React-based responsive website
- **Backend**: Node.js with Express and MongoDB
- **Services**: Motor winding, motor repair, generator repair
- **Booking System**: Customer service request management

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)

### Installation

1. **Install all dependencies:**
   ```bash
   npm run install-all
   ```

2. **Start MongoDB** (if using local installation)

3. **Run the application:**
   ```bash
   npm run dev
   ```

This will start:
- Backend server on http://localhost:5000
- Frontend on http://localhost:3000

### Manual Setup

**Backend:**
```bash
cd backend
npm install
npm run dev
```

**Frontend:**
```bash
cd frontend
npm install
npm start
```

## Project Structure

```
amol-electricals/
├── backend/
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── server.js        # Express server
│   └── .env            # Environment variables
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   └── App.js       # Main app component
│   └── public/
└── package.json         # Root package file
```

## API Endpoints

- `GET /api/services` - Get all services
- `POST /api/services` - Add new service
- `GET /api/bookings` - Get all bookings
- `POST /api/bookings` - Create new booking
- `PATCH /api/bookings/:id` - Update booking status

## Services Offered

1. **Motor Winding** - AC/DC motor rewinding
2. **Motor Repair** - Complete motor maintenance
3. **Generator Repair** - Generator service and maintenance