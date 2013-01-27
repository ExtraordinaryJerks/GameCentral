//this class is assuming a size of 25px x 25px, this needs to be configurable
//Movement pixel count 

(function () {
    var AbstractActor = function (spriteSheet, canvas, movementPixelCount, frameWidth, frameHeight) { this.initialize(spriteSheet, canvas, movementPixelCount, frameWidth, frameHeight); };

        var AbstractActor_p = AbstractActor.prototype = new createjs.BitmapAnimation();

        AbstractActor_p.BitmapAnimation_initialize = AbstractActor_p.initialize;

        AbstractActor_p.initialize = function (spriteSheet, canvas, movementPixelCount, frameWidth, frameHeight) {
            this.frameWidth = frameWidth;
            this.frameHeight = frameHeight;
            
            this.canvas = canvas;
            this.movementPixelCount = movementPixelCount;
            this.BitmapAnimation_initialize(spriteSheet);
            this._SpriteSheet = new createjs.SpriteSheet(spriteSheet);
        };

        AbstractActor_p.idle = function () {
            this.gotoAndPlay("idle");
            this.animating = false;
        };

        AbstractActor_p.right = function (angle) {
            this.rotationAngle = angle;

            if (!this.animating) {
                this.gotoAndPlay("right");
                this.animating = true;
            }
            this.rotation = this.rotationAngle;

            if (this.x < ($(this.canvas).width()) - this.frameWidth)
                this.x = this.x + this.movementPixelCount;
            else
                this.idle();

        };

        AbstractActor_p.left = function (angle) {
            this.rotationAngle = angle;

            if (!this.animating) {
                this.gotoAndPlay("left");
                this.animating = true;
            }
            this.rotation = this.rotationAngle;

            if (this.x > (this.frameWidth/2))
                this.x = this.x - this.movementPixelCount;
            else
                this.idle();
        };

        AbstractActor_p.up = function (angle) {
            this.rotationAngle = angle;

            if (!this.animating) {
                this.gotoAndPlay("up");
                this.animating = true;
            }
            this.rotation = this.rotationAngle;

            if (this.y > (this.frameHeight/2))
                this.y = this.y - this.movementPixelCount;
            else
                this.idle();
        };

        AbstractActor_p.down = function (angle) {
            this.rotationAngle = angle;

            if (!this.animating) {
                this.gotoAndPlay("down");
                this.animating = true;
            }
            this.rotation = this.rotationAngle;

            if (this.y < ($(this.canvas).height()) - this.frameHeight)
                this.y = this.y + this.movementPixelCount;
            else
                this.idle();

        };

        AbstractActor_p.bounds = function () {

            var xmax = this.x + (this.frameWidth / 2);
            var xmin = this.x - (this.frameWidth / 2);

            var ymax = this.y + (this.frameHeight / 2);
            var ymin = this.y - (this.frameHeight / 2);

            return new Array(xmin, xmax, ymin, ymax);

        };
    Threeguyz.AbstractActor = AbstractActor;
}());