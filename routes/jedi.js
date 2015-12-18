var express = require('express');
var router = express.Router();
var model = require('../models/Jedi');

router.get('/', function(req, res) {
  res.render('Jedi', { quote: 'The force is strong in my family'});
})

/* GET jedi listing. */
router.get('/api', function(req, res) {
  model.find(function(err, jedi) {
    if (err) console.log(err);
    res.send(jedi);
  });
});

/* GET /:id jedi */
router.get('/api/:id', function(req, res) {
  model.findById(req.params.id, function(err, jedi) {
    if (err) console.log(err);
    res.send(jedi);
  });
});

/* POST jedi */
router.post('/api', function(req, res) {
  model.create(req.body, function(err, jedi) {
    if (err) console.log(err);
    res.send(jedi);
  });
});

/* UPDATE jedi */
router.put('/api/:id', function(req, res) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, jedi) {
    if (err) console.log(err);
    res.send(jedi);
  });
});
router.patch('/api/:id', function(req, res) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, jedi) {
    if (err) console.log(err);
    res.send(jedi);
  });
});

/* DELETE jedi */
router.delete('/api/:id', function(req, res) {
  model.findByIdAndRemove(req.params.id, req.body, function(err, jedi) {
    if (err) console.log(err);
    res.send(jedi);
  });
});

module.exports = router;
