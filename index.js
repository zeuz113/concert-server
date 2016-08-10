app = require('express.io')()
app.http().io()
var express = require('express');
app.listen(8081);
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
