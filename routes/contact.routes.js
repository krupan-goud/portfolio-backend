const express = require('express');
const router = express.Router();
const routerController = require('../controllers/contact.controller');

router.post('/contact', routerController.contactInfo)

module.exports = router;