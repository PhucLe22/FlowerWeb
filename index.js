const express = require('express');
const path = require('path');
const authRoutes = require('./routes/auth');
const dotenv = require('dotenv');
dotenv.config();
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: '26012024',
    resave: false,
    saveUninitialized: true
}));
// Routes
app.use(authRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});