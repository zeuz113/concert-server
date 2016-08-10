var socket = io.connect('https://pixelmapping.herokuapp.com/');
  socket.on('init', function (data) {
    console.log(data);
    $("#"+data["color"]).addClass("selected")
    //socket.emit('my other event', { my: 'data' });
  });
  socket.on('change-sq', function (data) {
    console.log("cambiando a "+data["color"]);
  });

  function select_color(color){
		$(".colorselector.selected").removeClass("selected") ;
		$("#"+color).addClass("selected") ;
		socket.emit('change-sq', { color: color });
  }

  function select_speed(speed){
		$(".speedselector.selected").removeClass("selected") ;
		$("#"+speed).addClass("selected") ;
		socket.emit('change-speed', { speed: speed });
  }