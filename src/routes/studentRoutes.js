const express = require('express');
const studentController = require('../controllers/studentController');
const authService = require('../services/authService');

const router = express.Router();

// Get available sessions
router.get('/', authService.parseToken, studentController.getAvailableSessions);

// Book a session
router.post('/book', authService.parseToken, studentController.bookSession);

module.exports = router;
