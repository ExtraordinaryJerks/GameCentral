
var PinkySpriteSheet = {
    "animations":
        {
            "idle": [2],
            "left": [0, 0, "left"],
            "right": [1, 1, "right"],
            "up": [2, 2, "up"],
            "down": [3, 3, "down"]
        },
    "images": ["../content/sprites/ghost_pink.png"],
    "frames":
        {
            "height": 25,
            "width": 25,
            "regX": 12.5,
            "regY": 12.5,
            "count": 4
        }
};

var Pinky = function () { this.initialize(); };

var Pinky_p = Pinky.prototype = new Threeguyz.AbstractActor();
Pinky_p.AbstractActor_initialize = Pinky_p.initialize;

Pinky_p.initialize = function () {
    this.AbstractActor_initialize(new createjs.SpriteSheet(PinkySpriteSheet), $("#canvas"), 12.5, 25, 25);
};