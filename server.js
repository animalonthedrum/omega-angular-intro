//requires
var express = require('express');
var app = express();
var path = require('path');

//globals

var port = process.env.PORT || 1122;

//use
app.use(express.static('public'));

//spin up sanitizeUriProvider
app.listen(port, function() {

  console.log('listening');
});

//base url

app.get('/', function(req, res) {
  console.log('in base url');
  res.sendFile(path.resolve('public/views/index.html'));
}); //end base url
