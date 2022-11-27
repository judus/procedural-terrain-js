export class SpriteSheet {
	constructor(image, width, height, name) {
		this.name = name,
		this.image = image;
		this.width = width;
		this.height = height;
		this.tiles = new Map();
		this.animations = new Map();
	}

	defineAnim(name, animation) {
		this.animations.set(name, animation);
	}

	define(name, x, y, width, height) {
		const buffers = [false, true].map(flip => {
			const buffer = new OffscreenCanvas(width, height);

			const context = buffer.getContext('2d');
			context.imageSmoothingEnabled = false;

			if (flip) {
				context.scale(-1, 1);
				context.translate(-width, 0);
			}
			context.imageSmoothingEnabled = false;

			context.drawImage(
				this.image,
				x,
				y,
				width,
				height,
				0,
				0,
				width,
				height
			);

			return buffer;
		});

		this.tiles.set(name, buffers);
	}

	get(name) {
		this.tiles.get(name);
	}

	getSize(name) {
		return {
			width: this.tiles.get(name)[0].width,
			height: this.tiles.get(name)[0].height,
		};
	}

	defineTile(name, x, y) {
		this.define(name, x * this.width, y * this.height, this.width, this.height);
	}

	draw(name, context, x, y, distance, flip = false) {
		const tile = this.tiles.get(name);
		const buffer = this.tiles.get(name)[flip ? 1 : 0];
		context.drawImage(buffer, x, y);
	}

	drawDebug(name, context, x, y, distance, flip = false) {
		const tile = this.tiles.get(name);
		if(tile !== undefined) {
			const buffer = this.tiles.get(name)[flip ? 1 : 0];
			context.drawImage(buffer, x, y);
		} else {
			//console.log('missing sprite ' + name + ' from ' + this.image.src);
		}
	}

	drawAnim(name, context, x, y, distance, flip = false) {
		const animation = this.animations.get(name);
		if (animation === undefined) {
			console.log('missing animation name ' + name);
		}

		this.drawTile(animation(distance), context, x, y, flip);
	}

	drawTile(name, context, x, y, flip) {
		this.draw(name, context, x, y, flip);
	}
}