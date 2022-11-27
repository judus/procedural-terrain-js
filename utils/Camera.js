import {Vector2d} from "./Vector2d.js";

export default class Camera {
	constructor(width, height, px = 0, py = 0, vx = 0, vy = 0, ax = 16, ay = 16, dx = 100, dy = 100) {
		this.width = width;
		this.height = height;
		this.pos = new Vector2d(px, py);
		this.vel = new Vector2d(vx, vy);
		this.acc = new Vector2d(ax, ay);
		this.dcl = new Vector2d(dx, dy);
		this.moves = false;
	}

	isMoving() {
		return this.vel.x !== 0 || this.vel.y !== 0 || this.moves;
	}

	setPos(x, y) {
		this.pos.x = Math.floor(x);
		this.pos.y = Math.floor(y);
	}

	move(x, y) {
		this.vel.set(x, y);
	}

	center(x, y) {
		this.setPos(x - (this.width / 2), y - (this.height / 2));
	}

	update() {
		this.pos.add(
			this.vel.x * this.acc.x,
			this.vel.y * this.acc.y
		)
	}
}