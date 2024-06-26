const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index); 
router.get('/results', mainController.search); 

module.exports = router;