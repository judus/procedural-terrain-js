import {constrain, map, scale, smoothStep} from "./utils/math.js";
import P5noise from "./utils/p5noise.js";
import {terrainMap} from "./assets/assets.js";

export default class Decoration {
	constructor(assetMap) {
		this.p5noise = new P5noise();
		this.p5noise.noiseDetail(4, 0.4);
	}

	resolve(tile, width, height) {
		const terrain = terrainMap[tile.type.index];

		if(
			tile.type.isBorder ||
			terrain === undefined ||
			terrain.stepDecorations === undefined ||
			terrain.stepDecorations[tile.type.step] === undefined
		) return;

		const startX = tile.x1;
		const startY = tile.y1;

		const map1 = map(this.p5noise.noise(tile.x1 * 0.02, tile.y2 * 0.02), 0, 1, 0, 1);
		const holes11 = this.p5noise.noise(-500 + tile.type.level + tile.x1 * 1, -500 + tile.type.level + tile.y2 * 1);
		const holes12 = this.p5noise.noise(tile.type.level + tile.x1 * 0.6, tile.type.level + tile.y2 * 0.6);

		const map2 = this.p5noise.noise(tile.type.noise + tile.x1 * 0.01, tile.type.noise + tile.y2 * 0.01);
		const holes21 = this.p5noise.noise(-350 + tile.type.level + tile.x1 * 1, -150 + tile.type.level + tile.y2 * 1);
		const holes22 = this.p5noise.noise(-350 + tile.type.level + tile.x1 * 1, -150 + tile.type.level + tile.y2 * 1);

		let v = map1;
		v = map1 - holes11;
		v = smoothStep(0.45, 0.55, map1);
		v = v + smoothStep(0.4, 0.5, holes12);

		let v2 = map2;
		v2 = map2 - holes21;
		v2 = smoothStep(0.45, 0.55, map2);
		v2 = v2 + smoothStep(0.4, 0.5, holes22);

		v2 = (v2 + v) / 2

		if(v2 < 0.3) {
			let stepDecorations = terrain.stepDecorations;
			let stepDecoration = stepDecorations[tile.type.step]
			const length = terrain.stepDecorations[tile.type.step].img.length;

			const variant = constrain(scale(Math.cos(tile.type.noise * tile.x1 * tile.y1), length, 0.9), 0, length - 1);
			const sprite = terrain.stepDecorations[tile.type.step].img[variant];

			tile.type.decoration = {
				img: sprite,
				sprite: stepDecoration.sprite
			}
		}
	}
}
