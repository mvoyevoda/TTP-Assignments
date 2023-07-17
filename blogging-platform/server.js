require('dotenv').config()
const express = require('express');
const app = express()
const port = 4000

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.send("<h1>Welcome to the Blogging Platform!</h1>")
});

// Endpoints for users
app.get('/users', (req, res) => {
  
  // res.send(users)
});
