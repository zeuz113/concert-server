
    var socket = io.connect('https://pixelmapping.herokuapp.com/');               
    socket.on('connect', function() {
      socket.on('text', function(text) {
        alert(text);
       });
      socket.on('init', function (data) { 
        //socket.emit('my other event', { my: 'data' });
        $(".app h1").html("");
        $("#deviceready").hide();
        swapC();
        cols = data["color"]+",#000000";
    	cols = cols.split(",");
    	navigator.notification.vibrate(2000);
    	geoloc();
      });
      socket.on('change-sq', function (data) {
        cols = data["color"]+",#000000";
    	cols = cols.split(",")
      });
       socket.on('change-speed', function (data) {
        time = data["speed"];
      });
      socket.on('error', function () {
        alert( "error");
      });
    });    


var cols = "#000000,#000000".split(",");
var cPos = 0
var time = 500;

function swapC() {
    //$('body').animate({ backgroundColor:cols[cPos] }, 500)
    $('body').css('backgroundColor',cols[cPos] );
    cPos++
    if (cPos >= 2) {
        cPos = 0
    }
    window.setTimeout(function() { swapC() }, time)
}
        


