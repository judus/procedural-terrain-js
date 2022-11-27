import TileResolver from "./utils/TileResolver.js";
import TileGridMap from "./utils/TileGridMap.js";
import {createCanvas} from "./utils/createCanvas.js";
import {parseSpriteSheet} from "./utils/parseSpriteSheet.js";

import Terrain from "./Terrain.js";
import Decoration from "./Decoration.js";
import {createBackgroundLayer} from "./backgroundLayer.js";
import {createDecorationLayer} from "./decorationLayer.js";

import decorations from "./assets/decorations.json" assert {type: 'json'};
import terrain from "./assets/terrain.json" assert {type: 'json'};
import {data} from "./assets/data.js";

export default class TerrainGenerator {
	constructor(width, height, seed, camera) {
		this.width = width;
		this.height = height;
		this.seed = seed;
		this.camera = camera;
		this.tileSize = 16;
		this.layers = new Map();
		this.terrain = new Terrain();
		this.decoration = new Decoration()
		this.tileResolver = new TileResolver(this.tileSize);
		this.tiles = null;
		this.tileGrid = null;
		this.sprites = new Map();
		this.canvas = createCanvas(this.width, this.height);
		this.context = this.canvas.getContext('2d');
		this.camera.setPos(-84, 126);
	}

	load(callback) {
		Promise.all([
			parseSpriteSheet(decorations, data["decorations"]),
			parseSpriteSheet(terrain, data["terrain"]),

		]).then((spriteSheets) => {

			spriteSheets.forEach(
				spriteSheet => this.sprites.set(spriteSheet.name, spriteSheet)
			);

			this.createLayer('background', (canvas, context, scene) => {
				return createBackgroundLayer(canvas, context, scene);
			});

			this.createLayer('decoration', (canvas, context, scene) => {
				return createDecorationLayer(canvas, context, scene);
			});

			typeof callback === 'function' && callback()

			this.refresh()
		})
	}

	createLayer(name, layerConstructor) {
		const canvas = new OffscreenCanvas(this.width, this.height);
		const context = canvas.getContext('2d');
		this.layers.set(name, layerConstructor(canvas, context, this));
	}

	refresh() {
		this.updateFrame();
		this.renderFrame(true);
	}

	resolveTiles() {
		return this.tileResolver.resolve(this.camera, (tile) => {
			this.terrain.resolve(tile, this.width, this.height);
			this.decoration.resolve(tile, this.width, this.height);
			return tile;
		});
	}

	updateFrame() {
		this.terrain.noiseSeed(this.seed);
		this.tiles = this.resolveTiles();
		this.tileGrid = new TileGridMap(this.tiles);
		this.terrain.makeBorders(this.tileGrid);
	}

	renderFrame(forceDraw = false, deltaTime = 0, tick = 0, time = 0) {
		this.context.clearRect(0, 0, this.width, this.height);

		this.layers.forEach((layer) => {
			// Layers we want to render on each cycles
			if(layer.lazy === undefined || layer.lazy !== true) {
				layer.render(deltaTime, tick, time);
			}
			// Layers we want to render only when the camera moves
			else if(this.camera.isMoving() || forceDraw === true) {
				layer.render(deltaTime, tick, time);
			}

			this.context.drawImage(layer.canvas, 0, 0);
		});
	}

	update(deltaTime, tick, time) {
		this.updateFrame(deltaTime, tick, time);
	}

	render(deltaTime, tick, time) {
		this.renderFrame(false, deltaTime, tick, time);
	}

}