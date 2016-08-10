app = require('express.io')()
app.http().io()
app.set('port', process.env.PORT || 5000);
var express = require('express');

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;

var actualcolor="blue";

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});
app.get('/controller', function (req, res) {
  res.sendfile(__dirname + '/controller.html');
});
app.use( express.static(__dirname + '/public') );
app.io.set( 'origins', '*:*' );
app.io.sockets.on('connection', function (socket) {
  socket.emit('init', { color : actualcolor });
  socket.on('my other event', function (data) {
    console.log(data);
  });
  socket.on('change-speed', function (data) {
    console.log(data);
    actualcolor=data["speed"];
    socket.broadcast.emit('change-speed', data);
  });
  socket.on('change-sq', function (data) {
    console.log(data);
    actualcolor=data["color"];
    socket.broadcast.emit('change-sq', data);
  });
});
