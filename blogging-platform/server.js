const express = require('express');
const session = require('express-session');
const app = express();
const routes = require('./routes');
const port = 4000;

// Middleware
app.use(express.json());
app.use(
  session({
    secret: 'key',
    resave: false,
    saveUninitialized: true,
  })
);
app.use('/api', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
