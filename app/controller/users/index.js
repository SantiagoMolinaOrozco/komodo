var express = require('express');
var app = module.exports = express();

app.get('/', function(request, response) {
  console.log('Hola, Mundo!');
  response.send('hola mundo 2');
  response.write("Hola Mundo 3");
});
