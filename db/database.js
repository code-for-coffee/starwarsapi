var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/starwars';

mongoose.connect(connectionString);

mongoose.connection.on('connected', function() {
  console.log('Mongod gave us the power to save the data');
})

mongoose.connection.on('error', function(err) {
  console.log(err);
})

mongoose.connection.on('disconnected', function() {
  console.log('Was the power too much for you?');
})
