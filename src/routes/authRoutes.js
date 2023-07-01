const express = require('express');
const authService = require('../services/authService');
const studentController = require('../controllers/studentController');
const deanController = require('../controllers/deanController');

const router = express.Router();

// Student login
router.post('/student/login', studentController.login);

// Dean login
router.post('/dean/login', deanController.login);

module.exports = router;
