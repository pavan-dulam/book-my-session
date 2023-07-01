const express = require('express');

const Router = express.Router();

const deanRoutes = require('./deanRoutes');
const sessionRoutes = require('./sessionRoutes');
const studentRoutes = require('./studentRoutes');
const authRoutes = require('./authRoutes');
// Routes
Router.use('/auth', authRoutes);
Router.use('/dean', deanRoutes);
Router.use('/session', sessionRoutes);
Router.use('/student', studentRoutes);

module.exports = Router;
