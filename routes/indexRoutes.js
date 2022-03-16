var express = require('express');
var router = express.Router();
var indexControllers = require('../controllers/indexControllers');

router.get('/', indexControllers.index);
router.get('/checkout', indexControllers.checkout);

module.exports = router;
