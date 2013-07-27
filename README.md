[![Build Status](https://secure.travis-ci.org/wpreul/danger-shield.png)](http://travis-ci.org/wpreul/danger-shield)

* Requires [Johnny-Five](https://npmjs.org/package/johnny-five)

## Example

```javascript
var Five = require('johnny-five');
var Danger = require('danger-shield');


Five.Board().once('ready', function () {

    var danger = new Danger(Five);

    danger.leftButton.on('down', function () {

        danger.ledYellow1.on();
    });

    danger.leftButton.on('up', function () {

        danger.ledYellow1.off();
    });
});
```