var j5 = require('johnny-five'),
    Pi = require('raspi-io');

var board = new j5.Board({
    io: new Pi()
});

board.on("ready", function () {
    var led = new j5.Led('GPIO8');
    led.strobe(500);
});
