
var PacmanSpriteSheet = {
    "animations":
        {
            "up": [0, 2, "up"],
            "down": [0, 2, "down"],
            "left": [0, 2, "left"],
            "right": [0, 2, "right"],
            "idle": [0]
        },
    "images": ["../content/sprites/pacman.png"],
    "frames":
        {
            "height": 25,
            "width": 25,
            "regX": 12.5,
            "regY": 12.5,
            "count": 3
        }
};

var Pacman = function () { this.initialize(); };

var Pacman_p = Pacman.prototype = new Threeguyz.AbstractActor();
Pacman_p.AbstractActor_initialize = Pacman_p.initialize;

Pacman_p.initialize = function () {
    this.AbstractActor_initialize(new createjs.SpriteSheet(PacmanSpriteSheet), $("#canvas"), 7, 25, 25);
};
