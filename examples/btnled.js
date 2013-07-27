// Load modules

var Five = require('johnny-five');
var Danger = require('../');


var board = new Five.Board();

board.once('ready', function () {

    var danger = new Danger(Five);

    danger.leftButton.on('down', function () {

        danger.ledYellow1.on();
    });

    danger.leftButton.on('up', function () {

        danger.ledYellow1.off();
    });
});
