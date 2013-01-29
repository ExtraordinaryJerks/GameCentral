
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
    this.AbstractActor_initialize(new createjs.SpriteSheet(BlinkySpriteSheet), $("#canvas"), 12.5, 25, 25);
};

Blinky_p.move = function (x, y) {
    var g = 10;

    var leftOf = this.x - 25;
    var rightOf = this.x + 25;
    var topOf = this.y - 25;
    var bottomOf = this.y + 25;

    var fleft = ((Math.abs(leftOf - x) / 25 + Math.abs(this.y - y) / 25) * 10) + g;
    var fright = ((Math.abs(rightOf - x) / 25 + Math.abs(this.y - y) / 25) * 10) + g;
    var fup = ((Math.abs(this.x - x) / 25 + Math.abs(topOf - y) / 25) * 10) + g;
    var fdown = ((Math.abs(this.x - x) / 25 + Math.abs(bottomOf - y) / 25) * 10) + g;

    var returnValue = lowest(new Array(new Array("up", fup), new Array("down", fdown), new Array("right", fright), new Array("left", fleft)));

    if (returnValue == "up")
        this.up(0);
    if (returnValue == "down")
        this.down(0);
    if (returnValue == "left")
        this.left(0);
    if (returnValue == "right")
        this.right(0);

};

function lowest(values) {
    var v = values[0];
    for (var i = 0, len = values.length; i < len; ++i) {
        if (values[i][1] < v[1])
            v = values[i];
    }
    return v[0];
}