const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const axios = require('axios');
const cron = require('node-cron');
require('./cron');

// import the sanitizeMiddleware
const { sanitizeMiddleware } = require("./middleware/sanitizeMiddleware")

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://localhost:5173",
  "http://localhost:3000",
  "https://localhost:3000",
  "http://localhost:5000",
  "https://localhost:5000",
  "http://financika.netlify.app",
  "https://financika.netlify.app",
  "https://paisable-master.onrender.com"
];

app.use(
  cors({
    origin: function (origin, callback) {
      console.log('CORS request from origin:', origin);
      if (!origin) {
        // Allow requests with no origin (like curl, mobile apps, direct browser navigation)
        return callback(null, true);
      }
      // Normalize origin (remove trailing slash if present)
      const normalizedOrigin = origin.replace(/\/$/, '');
      const isAllowed = allowedOrigins.some(o => o.replace(/\/$/, '') === normalizedOrigin);
      if (isAllowed) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);
app.use(express.json());

// sanitizeMiddleware
app.use(sanitizeMiddleware());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/transactions', require('./routes/transactionRoutes'));
app.use('/api/receipts', require('./routes/receiptRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/budgets', require('./routes/budgetRoutes'));
app.use('/api/recurring', require('./routes/recurringTransactionRoutes'));


// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Fallback to index.html for SPA
// Serve frontend for all non-API routes (Express v5 regex catch-all)
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);

// This cron job pings the KEEP_ALIVE_URL every 10 minutes to prevent the server from sleeping on free hosting platforms.
cron.schedule("*/10 * * * *", async () => {
  const keepAliveUrl = process.env.KEEP_ALIVE_URL;
  if (!keepAliveUrl) {
    console.error(
      "KEEP_ALIVE_URL environment variable is not set. Skipping keep-alive ping."
    );
    return;
  }

  try {
    await axios.get(keepAliveUrl);
    console.log("Keep-alive ping sent!");
  } catch (error) {
    console.error("Keep-alive FAILED!", error.message);
  }
});

module.exports = { app, server };
