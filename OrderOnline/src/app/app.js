// ordering-management-backend/app.js (partial update)
const express = require('express');
const orderRoutes = require('./routes/order.routes');
const { Client } = require('pg');
const app = express();

app.use(express.json());
app.use('/api/orders', orderRoutes);

// Existing code for user and product routes...

module.exports = app;

// Set up PostgreSQL client
// vhost=localhost port=5433 dbname=OnlineOrder user=postgres password=xxxxxxx connect_timeout=10 sslmode=prefer
const client = new Client({
    host: 'localhost', // e.g., localhost
    port: 5433,
    user: 'postgres',
    password: '_Bontle146',
    database: 'OnlineOrder'
  });
  
  client.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Connection error', err.stack));
  
  // Define your API routes
  app.get('/api/data', async (req, res) => {
    try {
      const result = await client.query('SELECT * FROM your_table');
      res.json(result.rows);
    } catch (error) {
      res.status(500).send('Error retrieving data from database');
    }
  });
  
  // Start the server
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });