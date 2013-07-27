// Declare internals

var internals = {};


module.exports = internals.DangerShield = function (five) {

    this.buzzer = new five.Pin({
        addr: 3
    });

    this.leftButton = new five.Button({
        pin: 10,
        isPullup: true
    });
    this.middleButton = new five.Button({
        pin: 11,
        isPullup: true
    });
    this.rightButton = new five.Button({
        pin: 12,
        isPullup: true
    });

    this.leftSlider = new five.Sensor({
        pin: 'A0',
        freq: 250
    });
    this.middleSlider = new five.Sensor({
        pin: 'A1',
        freq: 250
    });
    this.rightSlider = new five.Sensor({
        pin: 'A2',
        freq: 250
    });

    this.photoresistor = new five.Sensor({
        pin: 'A3',
        freq: 250
    });

    this.temp = new five.Sensor('A4');

    this.shiftRegister = new five.ShiftRegister({
        pins: {
            data: 9,
            clock: 8,
            latch: 7
        }
    });

    this.ledYellow1 = new five.Led({
        pin: 5
    });
    this.ledYellow2 = new five.Led({
        pin: 6
    });
};