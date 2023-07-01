const express = require('express');
const deanController = require('../controllers/deanController');
const authService = require('../services/authService');

const router = express.Router();

// Get pending sessions for the dean
router.get(
  '/pending-sessions',
  authService.parseToken,
  deanController.getPendingSessions
);

module.exports = router;
