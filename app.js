const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/apiRoutes');
const config = require('./config/config');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

//to import css from public
// app.use(express.static('public'));
// Serve static assets (React frontend)
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// Default route for React frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

app.use(bodyParser.json());

// Connect to MongoDB
// config.connectDB();

// Routes
app.use('/', apiRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
