require('dotenv').config()
const express = require('express');
const app = express();
const routes = require('./routes');
const port = 4000;

// Middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// Mount routes
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send("Welcome to the Blogging Platform!")
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
