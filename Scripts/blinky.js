
var BlinkySpriteSheet = {
    "animations":
        {
            "idle": [2],
            "left": [0, 0, "left"],
            "right": [1, 1, "right"],
            "up": [2, 2, "up"],
            "down": [3, 3, "down"]
        },
    "images": ["../content/sprites/ghost_red.png"],
    "frames":
        {
            "height": 25,
            "width": 25,
            "regX": 12.5,
            "regY": 12.5,
            "count": 4
        }
};

var Blinky = function () { this.initialize(); };

var Blinky_p = Blinky.prototype = new Threeguyz.AbstractActor();
Blinky_p.AbstractActor_initialize = Blinky_p.initialize;

Blinky_p.initialize = function () {
    this.AbstractActor_initialize(new createjs.SpriteSheet(BlinkySpriteSheet), $("#canvas"), 25, 25, 25);
};