require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const roleRoutes = require('./routes/roles');
const app = express();

app.use(express.json()); // Middleware to parse JSON requests

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Use Routes
app.use('/api/auth', authRoutes);  // Authentication routes
app.use('/api/roles', roleRoutes); // Role-specific routes

// Test Route
app.get('/', (req, res) => {
  res.send('RBAC System is running!');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
