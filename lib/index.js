// Load modules

var Five = require('johnny-five');


// Declare internals

var internals = {};


module.exports = internals.DangerShield = function () {

    this.buzzer = new Five.Pin({
        addr: 3
    });

    this.leftButton = new Five.Button(10);
    this.middleButton = new Five.Button(11);
    this.rightButton = new Five.Button(12);

    this.leftSlider = new Five.Sensor({
        pin: 'A0',
        freq: 250
    });
    this.middleSlider = new Five.Sensor({
        pin: 'A1',
        freq: 250
    });
    this.rightSlider = new Five.Sensor({
        pin: 'A2',
        freq: 250
    });

    this.photoresistor = new Five.Sensor({
        pin: 'A3',
        freq: 250
    });

    this.temp = new Five.Sensor('A4');

    this.shiftRegister = new Five.ShiftRegister({
        pins: {
            data: 9,
            clock: 8,
            latch: 7
        }
    });

    this.ledYellow1 = new Five.Led({
        pin: 5
    });
    this.ledYellow2 = new Five.Led({
        pin: 6
    });
};