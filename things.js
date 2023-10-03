var express = require('express');
var router = express.Router();

//routing
router.get('/:name', function(req, res) {
    res.send('Hello Rakamin ' + req.params.name + '!');
});

router.post('/', function(req, res) {
    res.send('Hello Rak! from post');
});

router.put('/put', function(req, res) {
    res.send('Hello Rak! from put');
});

module.exports = router;