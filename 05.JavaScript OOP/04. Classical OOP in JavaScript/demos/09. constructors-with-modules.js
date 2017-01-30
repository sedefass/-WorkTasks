var Shape = (function () {
	function Shape1(x, y, width, height) {
		this._x = x;
		this._y = y;
		this._width = width;
		this._height = height;
	}

	Shape1.prototype = {
		calcArea: function () {
			return this._width * this._height;
		},
		calcPerimeter: function () {
			return 2 * this._width + 2 * this._height;
		}
	};

	return Shape1;
} ());

console.log(new Shape(5, 5, 10, 11));
console.log(new Shape(5, 5, 10, 11).calcArea());