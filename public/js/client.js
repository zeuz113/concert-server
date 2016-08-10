var socket = io.connect('http://concerts.jit.su');
  socket.on('init', function (data) {
    console.log(data);
    //socket.emit('my other event', { my: 'data' });
    //$("body").css("background-color",data["color"]);
    swapC();
  });
  socket.on('change-sq', function (data) {
    //console.log("cambiando a "+data["color"]);
    cols = data["color"]+",#000000";
    cols = cols.split(",")
    //$("body").css("background-color",data["color"]);
  });
  socket.on('change-speed', function (data) {   
    speed=data["speed"];
  });

var cols = "#0000ff,#000000".split(",");
var cPos = 0
var speed=500;

function swapC() {
    //$('body').animate({ backgroundColor:cols[cPos] }, 500)
    $('body').css('backgroundColor',cols[cPos] );
    cPos++
    if (cPos >= 2) {
        cPos = 0
    }
    window.setTimeout(function() { swapC() }, speed)
}