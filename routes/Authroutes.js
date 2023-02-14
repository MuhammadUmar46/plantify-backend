const express = require('express');
const AuthController = require('../controllers/AuthController');
const router = express.Router();



// Authentication Routes for Login 
router.post('/api/signup',AuthController.signup);

// Authentication Routes for Signup
router.post('/api/login',AuthController.login);


module.exports = router;