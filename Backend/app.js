import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/config.js';

import authRoutes from './routes/authRoutes.js';

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Add middleware to parse JSON

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to EventHub API');
});

// Use the auth routes
app.use('/auth', authRoutes);

// Fallback route for 404 errors
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// Error handling middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? null : error.stack, // Hide stack trace in production
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});