import HeightMap from "./HeightMap.js";
import P5noise from "./utils/p5noise.js";
import {terrainMap} from "./assets/assets.js";

export default class Terrain {

	constructor() {
		this.noiseGenerator = new P5noise();
		this.noiseGenerator.noiseDetail(3, 0.4);
		this.heightMap = new HeightMap(this.noiseGenerator);
	}

	noiseSeed(seed) {
		this.noiseGenerator.noiseSeed(seed);
	}

	resolve(tile, width, height) {
		tile.type = this.get(tile.x1 / width, tile.y1 / height);
		this.resolveTileVariant(tile);
	}

	getType(index) {
		return terrainMap[index];
	}

	get(x, y) {
		let hmap;

		// First height map
		hmap = this.heightMap
			.details(2, 0.4).distance(0.5)
			.levels(9).offsetLevels(-3)
			.get(x, y);

		// Second height map on top of first height map
		// for more "randomness"
		hmap = this.heightMap
			.details(3, 0.4).distance(1)
			.levels(16).offsetLevels(-5)
			.steps(5, false, 0)
			.get(x, y, hmap.noise, 1);

		const terrain = this.getType(hmap.level);

		if (terrain.steps !== undefined) {
			this.heightMap.steps(terrain.steps, terrain.reverseSteps, terrain.offsetSteps);
			hmap.step = this.heightMap.getLevelStep(hmap.dNoise)
		}

		return {
			index: hmap.level,
			noise: hmap.noise,
			level: hmap.level,
			step: hmap.step,
			steps: hmap.steps,
			isBorder: false,
			isWalkable: true,
			terrain: terrain,
			img: undefined,
			color: terrain.color
		};
	}


	resolveTileVariant(tile) {
		// Here we could define another logarithm to choose an alternative
		// tile image. But we don't really need that for the demo.
		tile.variant = 0;
	}

	isHigher(tile1, tile2) {
		if(tile1 === undefined) return;
		return tile1.type.level > tile2.type.level;
	}

	makeBorders(grid) {
		grid.forEach(tile => {
			this.checkNeighbors(tile, grid);
		});
	}

	checkNeighbors(tile, grid) {
		if (tile.type === undefined) return;

		const type = this.getType(tile.type.index);
		const tileAbove = grid.get(tile.indexX, tile.indexY - 1);
		const tileRight = grid.get(tile.indexX + 1, tile.indexY);
		const tileBelow = grid.get(tile.indexX, tile.indexY + 1);
		const tileLeft = grid.get(tile.indexX - 1, tile.indexY);
		const tileTopRight = grid.get(tile.indexX + 1, tile.indexY - 1);
		const tileBottomRight = grid.get(tile.indexX + 1, tile.indexY + 1);
		const tileBottomLeft = grid.get(tile.indexX - 1, tile.indexY + 1);
		const tileTopLeft = grid.get(tile.indexX - 1, tile.indexY - 1);

		if(this.isHigher(tileAbove, tile)) {
			tile.type.isBorder = true;
			tile.type.isWalkable = type.borderIsWalkable;
			tile.type.img = type.imgTop

			if(tile.type.terrain.name === "Water") {
				tile.type.color = tileAbove.type.color;
			}
		}

		if(this.isHigher(tileRight, tile)) {
			tile.type.isBorder = true;
			tile.type.isWalkable = type.borderIsWalkable;
			tile.type.img = type.imgRight

			if(tile.type.terrain.name === "Water") {
				tile.type.color = tileRight.type.color;
			}
		}

		if(this.isHigher(tileBelow, tile)) {
			tile.type.isBorder = true;
			tile.type.isWalkable = type.borderIsWalkable;
			tile.type.img = type.imgBottom;

			if(tile.type.terrain.name === "Water") {
				tile.type.color = tileBelow.type.color;
			}
		}

		if(this.isHigher(tileLeft, tile)) {
			tile.type.isBorder = true;
			tile.type.isWalkable = type.borderIsWalkable;
			tile.type.img = type.imgLeft

			if(tile.type.terrain.name === "Water") {
				tile.type.color = tileLeft.type.color;
			}
		}

		if(
			this.isHigher(tileAbove, tile) &&
			this.isHigher(tileRight, tile)
		) {
			tile.type.isBorder = true;
			tile.type.isWalkable = type.borderIsWalkable;
			tile.type.img = type.imgTopRight
		}

		if(
			this.isHigher(tileBelow, tile) &&
			this.isHigher(tileRight, tile)
		) {
			tile.type.isBorder = true;
			tile.type.isWalkable = type.borderIsWalkable;
			tile.type.img = type.imgBottomRight
		}

		if(
			this.isHigher(tileBelow, tile) &&
			this.isHigher(tileLeft, tile)
		) {
			tile.type.isBorder = true;
			tile.type.isWalkable = type.borderIsWalkable;
			tile.type.img = type.imgBottomLeft
		}

		if(
			this.isHigher(tileAbove, tile) &&
			this.isHigher(tileLeft, tile)
		) {
			tile.type.isBorder = true;
			tile.type.isWalkable = type.borderIsWalkable;
			tile.type.img = type.imgTopLeft
		}

		if(
			!this.isHigher(tileAbove, tile) &&
			!this.isHigher(tileRight, tile) &&
			this.isHigher(tileTopRight, tile)
		) {
			tile.type.isBorder = true;
			tile.type.isWalkable = type.borderIsWalkable;
			tile.type.img = type.imgTopRightInner;
		}

		if(
			!this.isHigher(tileBelow, tile) &&
			!this.isHigher(tileRight, tile) &&
			this.isHigher(tileBottomRight, tile)
		) {
			tile.type.isBorder = true;
			tile.type.isWalkable = type.borderIsWalkable;
			tile.type.img = type.imgBottomRightInner;
		}

		if(
			!this.isHigher(tileBelow, tile) &&
			!this.isHigher(tileLeft, tile) &&
			this.isHigher(tileBottomLeft, tile)
		) {
			tile.type.isBorder = true;
			tile.type.isWalkable = type.borderIsWalkable;
			tile.type.img = type.imgBottomLeftInner;
		}

		if(
			!this.isHigher(tileAbove, tile) &&
			!this.isHigher(tileLeft, tile) &&
			this.isHigher(tileTopLeft, tile)
		) {
			tile.type.isBorder = true;
			tile.type.isWalkable = type.borderIsWalkable;
			tile.type.img = type.imgTopLeftInner;
		}
	}
}