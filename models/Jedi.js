var mongoose = require('mongoose');
// name, forcePower, saberColour

var JediSchema = new mongoose.Schema({
  name: String,
  forcePower: String,
  saberColour: String,
  master: String
});

module.exports = mongoose.model('Jedi', JediSchema);
