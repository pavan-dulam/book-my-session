const express = require('express');
const sessionController = require('../controllers/sessionController');
const authService = require('../services/authService');

const router = express.Router();

// Get available sessions
router.get('/', sessionController.getAvailableSessions);

// Book a session
router.post('/book', authService.parseToken, sessionController.bookSession);

// Update session start time
router.put(
  '/:id',
  authService.parseToken,
  sessionController.updateSessionStartTime
);

module.exports = router;
