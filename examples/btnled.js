// Load modules

var Five = require('johnny-five');
var Danger = require('../');


Five.Board().once('ready', function () {

    var danger = new Danger(Five);

    danger.leftButton.on('down', function () {

        danger.ledYellow1.on();
    });

    danger.leftButton.on('up', function () {

        danger.ledYellow1.off();
    });
});
