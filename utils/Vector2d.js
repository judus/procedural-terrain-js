export class Vector2d {
	constructor(x, y) {
		this.set(x, y);
	}

	set(x, y) {
		this.x = x;
		this.y = y;
	}

	add(x, y) {
		this.x += x;
		this.y += y;
	}
}