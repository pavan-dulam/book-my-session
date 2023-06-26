const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
const cors = require('cors');
dotenv.config({ path: '.env' });

const pgClient = require('./config/database');
const logger = require('./config/logger');
const ApiRouter = require('./routes/router');

console.log('env.........', process.env.DB_HOST);
const app = express();
const Router = express.Router();

// Declaring Access Control
app.use(cors());
app.use(Router);

// Middleware
Router.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', ApiRouter);
// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

pgClient.connectDb();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
