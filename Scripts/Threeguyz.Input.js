var Threeguyz;
(function (Threeguyz) {
    (function (Input) {
        (function (Keyboard) {
            Keyboard._pressed = new Array();
            Keyboard.SPACE = 32;
            Keyboard.UP = 38;
            Keyboard.LEFT = 37;
            Keyboard.RIGHT = 39;
            Keyboard.DOWN = 40;
            Keyboard.W = 87;
            Keyboard.A = 65;
            Keyboard.D = 68;
            Keyboard.S = 83;

            Keyboard.isPressedAndLatest = function(keyCode) {
                return (this._pressed.length > 0 && this._pressed[0] == keyCode);
            };

            Keyboard.isPressed = function (keyCode) {
                return (this._pressed.indexOf(keyCode) > -1);
            };

            Keyboard.onKeydown = function (event) {
                var index = this._pressed.indexOf(event.keyCode);
                if (index == -1) {
                    this._pressed.unshift(event.keyCode);
                }
            };

            Keyboard.onKeyup = function (event) {
                var index = this._pressed.indexOf(event.keyCode);
                if (index > -1) {
                    this._pressed.splice(index, 1);
                }
            };

            Keyboard.areDirectionalKeysIdle = function() {
                return (
                    this.isPressed(this.LEFT) ||
                    this.isPressed(this.UP) ||
                    this.isPressed(this.RIGHT) ||
                    this.isPressed(this.DOWN) ||
                    this.isPressed(this.A) ||
                    this.isPressed(this.W) ||
                    this.isPressed(this.D) ||
                    this.isPressed(this.S)) ? false : true;
            };
        })(Threeguyz.Input.Keyboard || (Threeguyz.Input.Keyboard = {}));
    })(Threeguyz.Input || (Threeguyz.Input = {}));
})(Threeguyz || (Threeguyz = {}));