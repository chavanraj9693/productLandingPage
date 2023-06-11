const express = require('express');
const app = express();
const port = 3000;

// Set up routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Example API endpoint
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'IPL Jersey', price: 49.99 },
    { id: 2, name: 'IPL Cap', price: 19.99 },
    { id: 3, name: 'IPL Mug', price: 9.99 }
  ];
  res.json(products);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});