const express = require('express');
const spotifyRoutes = require('./spotify');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');

// Initialize Express application
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'bob', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
      origin: '*',
      methods: "GET, POST, PATCH, DELETE, PUT",
      allowedHeaders: "Content-Type, Authorization",
     })
  );

// Set up routes under /spotify
app.use('/spotify', spotifyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
