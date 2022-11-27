import {hexToRgbA} from "../utils/colors.js";

export let terrainMap = [
	{
		name: "Water",
		color: hexToRgbA("#138D59", 1),
		img: ["water", "deco-water-6-13", "deco-water-7-13", "deco-water-6-14", "deco-water-7-14"],

		borderIsWalkable: false,

		steps: 3,
		reverseSteps: false,
		offsetSteps: 0,

		stepDecorations: [
			{
				img: ["deco-water-7-13", "deco-water-6-13"],
				density: 0.1,
				sprite: "terrain"
			},
			{
				img: ["deco-water-7-14", "deco-water-6-13"],
				density: 0.1,
				sprite: "terrain"
			},
			{
				img: ["deco-water-6-14", "deco-water-6-13"],
				density: 0.1,
				sprite: "terrain"
			},
		]
	},
	{
		name: "Water",
		color: hexToRgbA("#138D59", 1),
		img: ["water", "deco-water-6-13", "deco-water-7-13", "deco-water-6-14", "deco-water-7-14"],

		borderIsWalkable: false,

		steps: 3,
		reverseSteps: false,
		offsetSteps: 0,

		stepDecorations: [
			{
				img: ["deco-water-7-13", "deco-water-6-13"],
				density: 0.1,
				sprite: "terrain"
			},
			{
				img: ["deco-water-7-14", "deco-water-6-13"],
				density: 0.1,
				sprite: "terrain"
			},
			{
				img: ["deco-water-6-14", "deco-water-6-13"],
				density: 0.1,
				sprite: "terrain"
			},
		]
	},
	{
		name: "Water",
		color: hexToRgbA("#138d59", 1),
		img: ["water", "deco-water-6-13", "deco-water-7-13", "deco-water-6-14", "deco-water-7-14"],

		imgTop: ["water-up-grass-1-10"],
		imgBottom: ["water-up-grass-1-12"],
		imgLeft: ["water-up-grass-0-11"],
		imgRight: ["water-up-grass-2-11"],

		imgTopLeft: ["water-up-grass-0-10"],
		imgTopRight: ["water-up-grass-2-10"],
		imgBottomLeft: ["water-up-grass-0-12"],
		imgBottomRight: ["water-up-grass-2-12"],

		imgTopLeftInner: ["water-up-grass-7-11"],
		imgTopRightInner: ["water-up-grass-6-11"],
		imgBottomLeftInner: ["water-up-grass-7-10"],
		imgBottomRightInner: ["water-up-grass-6-10"],

		borderIsWalkable: false,

		steps: 4,
		reverseSteps: true,
		offsetSteps: 0,

		stepDecorations: [
			{
				img: ["deco-water-7-13", "deco-water-6-13"],
				density: 0.1,
				sprite: "terrain"
			},
			{
				img: ["deco-water-7-14"],
				density: 0.1,
				sprite: "terrain"
			},
			{
				img: ["deco-water-6-14"],
				density: 0.1,
				sprite: "terrain"
			},
			{
				img: ["deco-water-6-13"],
				density: 0.1,
				sprite: "terrain"
			}
		]

	},
	{
		name: "Grass",
		img: ["grass-1-1", "deco-grass-5-0", "deco-grass-5-1", "deco-grass-5-2"],

		color: hexToRgbA("#a3b315", 1),

		imgBottomRightInner: ["dirt-up-dirt-3-6"],
		imgBottom: ["dirt-up-dirt-4-6"],
		imgBottomLeftInner: ["dirt-up-dirt-5-6"],
		imgLeft: ["dirt-up-dirt-5-7"],
		imgTopLeftInner: ["dirt-up-dirt-5-8"],
		imgTop: ["dirt-up-dirt-4-8"],
		imgTopRightInner: ["dirt-up-dirt-3-8"],
		imgRight: ["dirt-up-dirt-3-7"],
		imgBottomRight: ["dirt-up-dirt-6-6"],
		imgBottomLeft: ["dirt-up-dirt-7-6"],
		imgTopLeft: ["dirt-up-dirt-7-7"],
		imgTopRight: ["dirt-up-dirt-6-7"],

		imgSlopeLeft: ["dirt-slope-4-9"],
		imgSlopeCenter: ["dirt-slope-5-9"],
		imgSlopeRight: ["dirt-slope-6-9"],

		borderIsWalkable: false,

		steps: 4,
		reverseSteps: false,
		offsetSteps: 0,

		stepDecorations: [
			{
				img: ["water-plant-on-grass-1", "water-plant-on-grass-2", "small-stone"],
				density: 0.1,
				sprite: "decorations"
			},
			{
				img: ["deco-grass-5-2", "deco-grass-5-1", "deco-grass-5-0"],
				density: 0.1,
				sprite: "terrain"
			},
			{
				img: ["small-tree-on-grass", "tree-on-grass", "stone-on-grass", "mushroom-1"],
				density: 0.1,
				sprite: "decorations"
			},
			{
				img: ["deco-grass-5-2", "deco-grass-5-1", "deco-grass-5-0"],
				density: 0.1,
				sprite: "terrain"
			},

		]

	},
	{
		name: "Dirt",
		img: ["dirt-6-0", "deco-dirt-7-0", "deco-dirt-6-1", "deco-dirt-7-1", "deco-dirt-6-2", "deco-dirt-7-2"],

		color: hexToRgbA("#a4612b", 1),
		imgBottomRightInner: ["grass-0-0"],
		imgBottom: ["grass-1-0"],
		imgBottomLeftInner: ["grass-2-0"],
		imgLeft: ["grass-2-1"],
		imgTopLeftInner: ["grass-2-2"],
		imgTop: ["grass-1-2"],
		imgTopRightInner: ["grass-0-2"],
		imgRight: ["grass-0-1"],
		imgBottomRight: ["grass-4-1"],
		imgBottomLeft: ["grass-3-1"],
		imgTopLeft: ["grass-3-0"],
		imgTopRight: ["grass-4-0"],

		borderIsWalkable: true,

		steps: 2,
		reverseSteps: false,
		offsetSteps: 0,

		stepDecorations: [

			{
				img: ["small-stone", "small-bush"],
				density: 0.1,
				sprite: "decorations"
			},

			{
				img: ["small-stone", "plant-on-dirt-1"],
				density: 0.1,
				sprite: "decorations"
			},

		]
	},
	{
		name: "Grass",
		img: ["grass-1-1"],

		color: hexToRgbA("#a3b315", 1),

		imgBottomRightInner: ["darkgrass-0-3"],
		imgBottom: ["darkgrass-1-3"],
		imgBottomLeftInner: ["darkgrass-2-3"],
		imgLeft: ["darkgrass-2-4"],
		imgTopLeftInner: ["darkgrass-2-5"],
		imgTop: ["darkgrass-1-5"],
		imgTopRightInner: ["darkgrass-0-5"],
		imgRight: ["darkgrass-0-4"],

		//TODO: missing in the sprite sheet?!
		imgTopRight: ["darkgrass-1-4"],
		imgTopLeft: ["darkgrass-1-4"],
		imgBottomLeft: ["darkgrass-1-4"],
		imgBottomRight: ["darkgrass-1-4"],

		borderIsWalkable: true,

		steps: 5,
		reverseSteps: false,
		offsetSteps: 0,

		stepDecorations: [
			{
				img: ["small-tree-on-grass", "mushroom-on-grass-1", "tree-on-grass"],
				density: 0.1,
				sprite: "decorations"

			},
			{
				img: ["deco-grass-5-1", "deco-grass-5-2", "deco-grass-5-0"],
				density: 0.1,
				sprite: "terrain"

			},
			{
				img: ["mushroom-on-grass-2", "plant-on-grass-1"],
				density: 0.1,
				sprite: "decorations"
			},
			{
				img: ["deco-grass-5-0", "deco-grass-5-1"],
				density: 0.1,
				sprite: "terrain"

			},
			{
				img: ["water-plant-on-grass-1", "mushroom-on-grass-3", "water-plant-on-grass-2"],
				density: 0.1,
				sprite: "decorations"
			},


		]
	},
	{
		name: "Darkgrass",
		img: ["darkgrass-1-4"],
		color: hexToRgbA("#70801a", 1),
		imgBottomRightInner: ["dirt-up-dirt-3-6"],
		imgBottom: ["dirt-up-dirt-4-6"],
		imgBottomLeftInner: ["dirt-up-dirt-5-6"],
		imgLeft: ["dirt-up-dirt-5-7"],
		imgTopLeftInner: ["dirt-up-dirt-5-8"],
		imgTop: ["dirt-up-dirt-4-8"],
		imgTopRightInner: ["dirt-up-dirt-3-8"],
		imgRight: ["dirt-up-dirt-3-7"],
		imgBottomRight: ["dirt-up-dirt-6-6"],
		imgBottomLeft: ["dirt-up-dirt-7-6"],
		imgTopLeft: ["dirt-up-dirt-7-7"],
		imgTopRight: ["dirt-up-dirt-6-7"],

		imgSlopeLeft: ["dirt-slope-4-9"],
		imgSlopeCenter: ["dirt-slope-5-9"],
		imgSlopeRight: ["dirt-slope-6-9"],

		borderIsWalkable: false,

		steps: 3,
		reverseSteps: false,
		offsetSteps: 0,

		stepDecorations: [
			{
				img: ["small-tree-on-grass", "stone-on-grass", "small-stone", "mushroom-on-grass-2", "small-bush-on-grass"],
				density: 0.1,
				sprite: "decorations"
			},
			{
				img: ["small-tree-on-grass", "small-stone", "stone-on-grass", "mushroom-on-grass-2", "trunc", "tree-on-grass", "bush"],
				density: 0.1,
				sprite: "decorations"
			},
			{
				img: ["mushroom-on-grass-3", "tree-on-grass", "stone-on-grass", "small-tree-on-grass"],
				density: 0.1,
				sprite: "decorations"
			},

		]
	},
	{
		name: "Dirt",
		img: ["dirt-6-0"],
		color: hexToRgbA("#a4612b", 1),
		imgBottomRightInner: ["grass-0-0"],
		imgBottom: ["grass-1-0"],
		imgBottomLeftInner: ["grass-2-0"],
		imgLeft: ["grass-2-1"],
		imgTopLeftInner: ["grass-2-2"],
		imgTop: ["grass-1-2"],
		imgTopRightInner: ["grass-0-2"],
		imgRight: ["grass-0-1"],
		imgBottomRight: ["grass-4-1"],
		imgBottomLeft: ["grass-3-1"],
		imgTopLeft: ["grass-3-0"],
		imgTopRight: ["grass-4-0"],

		borderIsWalkable: true,

		steps: 3,
		reverseSteps: false,
		offsetSteps: 0,

		stepDecorations: [

			{
				img: ["small-stone", "plant-on-dirt-1"],
				density: 0.1,
				sprite: "decorations"
			},

			{
				img: ["small-stone", "plant-on-dirt-1"],
				density: 0.1,
				sprite: "decorations"
			},

			{
				img: ["small-bush-on-grass", "plant-on-dirt-1"],
				density: 0.1,
				sprite: "decorations"
			},
		]
	},
	{
		name: "Grass",
		color: hexToRgbA("#a3b315", 1),
		img: ["grass-1-1"],

		imgBottomRightInner: ["grass-up-grass-3-3"],
		imgBottom: ["grass-up-grass-4-3"],
		imgBottomLeftInner: ["grass-up-grass-5-3"],
		imgLeft: ["grass-up-grass-5-4"],
		imgTopLeftInner: ["grass-up-grass-5-5"],
		imgTop: ["grass-up-grass-4-5"],
		imgTopRightInner: ["grass-up-grass-3-5"],
		imgRight: ["grass-up-grass-3-4"],
		imgBottomRight: ["grass-up-grass-6-3"],
		imgBottomLeft: ["grass-up-grass-7-3"],
		imgTopLeft: ["grass-up-grass-7-4"],
		imgTopRight: ["grass-up-grass-6-4"],

		imgSlopeLeft: ["grass-slope-0-9"],
		imgSlopeCenter: ["grass-slope-1-9"],
		imgSlopeRight: ["grass-slope-2-9"],

		borderIsWalkable: false,

		steps: 3,
		reverseSteps: false,
		offsetSteps: 0,

		stepDecorations: [
			{
				img: ["deco-grass-5-1", "deco-grass-5-2", "deco-grass-5-0"],
				density: 0.1,
				sprite: "terrain"

			},

			{
				img: ["deco-grass-5-2", "deco-grass-5-0", "deco-grass-5-1"],
				density: 0.1,
				sprite: "terrain"

			},

			{
				img: ["small-tree-on-grass", "small-stone", "small-bush", "stone", "small-tree-on-grass", "tree-on-grass", "rock-on-grass", "bush-on-grass"],
				density: 0.1,
				sprite: "decorations"

			},


		]
	},
	{
		name: "grass",
		color: hexToRgbA("#a3b315", 1),
		img: ["grass-1-1"],
		imgBottomRightInner: ["dirt-up-dirt-3-6"],
		imgBottom: ["dirt-up-dirt-4-6"],
		imgBottomLeftInner: ["dirt-up-dirt-5-6"],
		imgLeft: ["dirt-up-dirt-5-7"],
		imgTopLeftInner: ["dirt-up-dirt-5-8"],
		imgTop: ["dirt-up-dirt-4-8"],
		imgTopRightInner: ["dirt-up-dirt-3-8"],
		imgRight: ["dirt-up-dirt-3-7"],
		imgBottomRight: ["dirt-up-dirt-6-6"],
		imgBottomLeft: ["dirt-up-dirt-7-6"],
		imgTopLeft: ["dirt-up-dirt-7-7"],
		imgTopRight: ["dirt-up-dirt-6-7"],

		imgSlopeLeft: ["dirt-slope-4-9"],
		imgSlopeCenter: ["dirt-slope-5-9"],
		imgSlopeRight: ["dirt-slope-6-9"],

		borderIsWalkable: false,

		steps: 3,
		reverseSteps: false,
		offsetSteps: 0,

		stepDecorations: [
			{
				img: ["deco-grass-5-1", "deco-grass-5-2", "deco-grass-5-0"],
				density: 0.1,
				sprite: "terrain"
			},

			{
				img: ["deco-grass-5-2", "deco-grass-5-0", "deco-grass-5-1"],
				density: 0.1,
				sprite: "terrain"
			},
			{
				img: ["small-stone", "small-bush", "stone"],
				density: 0.1,
				sprite: "decorations"
			},
		]
	},
	{
		name: "Stone",
		color: hexToRgbA("#a4612b", 1),
		img: ["dirt-6-0"],
		imgBottomRightInner: ["up-snow-8-0"],
		imgBottom: ["up-snow-9-0"],
		imgBottomLeftInner: ["up-snow-10-0"],
		imgLeft: ["up-snow-10-1"],
		imgTopLeftInner: ["up-snow-10-2"],
		imgTop: ["up-snow-9-2"],
		imgTopRightInner: ["up-snow-8-2"],
		imgRight: ["up-snow-8-1"],
		imgBottomRight: ["up-snow-12-1"],
		imgBottomLeft: ["up-snow-11-1"],
		imgTopLeft: ["up-snow-11-0"],
		imgTopRight: ["up-snow-12-0"],

		borderIsWalkable: false,

		steps: 2,
		reverseSteps: false,
		offsetSteps: 0,

		stepDecorations: [
			{
				img: ["small-stone", "small-bush", "stone"],
				density: 0.1,
				sprite: "decorations"
			},
			{
				img: ["small-stone", "stone-on-dirt", "rock-on-dirt"],
				density: 0.1,
				sprite: "decorations"
			},
		]

	},
	{
		name: "Snow",
		color: hexToRgbA("#f2f2f2", 1),
		img: ["up-snow-9-1"],
	},
];

