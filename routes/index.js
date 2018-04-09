var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Synapse' });
});

router.get('/fire', function(req, res) {
  res.render('fire', { title: 'Fire' });
});

module.exports = router;
