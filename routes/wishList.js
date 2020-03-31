const express = require('express');
const path = require('path');
const rootDirectory = require('../utilities/path');
const adminData = require('./admin');
const itemsController = require('../controllers/items');
const router = express.Router();

router.get('/', itemsController.getItems);

module.exports = router;