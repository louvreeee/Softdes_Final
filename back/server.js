import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js'; // Make sure the path is correct
import dotenv from 'dotenv';

// Initialize dotenv to load variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Apply middleware
app.use(cors());
app.use(express.json());

// Use the user routes with '/api/user' as the base path
app.use('/api/user', userRoutes);

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    const PORT = process.env.PORT || 3001; // Default to port 3001 if not specified
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });
