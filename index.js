var j5 = require('johnny-five'),
    Pi = require('respi-io');

var board = new j5.Board({
    io: new Pi()
});

board.on("ready", function () {
    var led = new j5.Led('P1-13');
    led.strobe(500);
});
