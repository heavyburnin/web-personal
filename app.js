"use strict";
const express = require('express');
const path = require("path");

const app = express();
const http = require("http");
// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory correctly
app.set('views', path.join(__dirname, 'views'));

// Serve static files from /static directory
app.use(express.static(path.join(__dirname, 'static')));

// Trust proxy (if behind reverse proxy like Nginx)
app.set('trust proxy', true);

// Routes
app.get('/', (req, res) => {
    res.render('pages/index');
});

app.get('/index', (req, res) => {
    res.render('pages/index');
});

app.get('/software', (req, res) => {
    res.render('pages/software');
});

app.get('/contact', (req, res) => {
    res.render('pages/contact');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`App listening on http://localhost:${PORT}`);
});

