var express = require('express');
var app = express();
var Parse = require('parse/node');
Parse.initialize("QEY1ZxKqnPoVpxyZ4YHXBb5t13iRvrW8jXAU72Bf", "q38ZsxLSoehX2w8HAPuJVwe4qDxUyf2xoUhXCkTJ");


app.get('/', function (req, res) {
	var Incident = Parse.Object.extend("Incident");
    var incident = new Incident();
    incident.save({
    	Lat: 10,
      	Lon: 10,
      	numPC: 10,
      	descrip: 'bad'});
   	
   	res.send('done');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});