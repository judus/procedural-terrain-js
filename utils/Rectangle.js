export class Rectangle {
	constructor(width, height, x, y) {
		this.set(width, height, x, y);
	}

	set(width, height, x, y) {
		this.size(width, height);
		this.pos(x, y);

		return this;
	}

	pos(x, y) {
		this.x = x;
		this.y = y;

		return this;
	}

	size(width, height) {
		this.width = width;
		this.height = height;

		return this;
	}
}