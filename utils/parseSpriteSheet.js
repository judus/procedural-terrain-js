import {SpriteSheet} from "./SpriteSheet.js";
import {createAnim} from "./animation.js";

function loadImageBitmap(imageDataUrl, width, height) {
	return new Promise(resolve => {
		const byteCharacters = atob(imageDataUrl);
		const byteNumbers = new Array(byteCharacters.length);
		for(let i = 0; i < byteCharacters.length; i++) {
			byteNumbers[i] = byteCharacters.charCodeAt(i);
		}
		const byteArray = new Uint8Array(byteNumbers);
		const blob = new Blob([byteArray]);
		const image = createImageBitmap(blob, 0, 0, width, height)
		resolve(image);
	});
}

export function parseSpriteSheet(sheetSpec, data) {
	return loadImageBitmap(data.base64, data.width, data.height).then(image => {
		const sprites = new SpriteSheet(
			image,
			sheetSpec.tileW,
			sheetSpec.tileH,
			sheetSpec.name,
		);

		if(sheetSpec.tiles) {
			sheetSpec.tiles.forEach(tileSpec => {
				sprites.defineTile(tileSpec.name,
					tileSpec.index[0],
					tileSpec.index[1]
				);
			});
		}

		if(sheetSpec.frames) {
			sheetSpec.frames.forEach(frameSpec => {
				sprites.define(frameSpec.name, ...frameSpec.rect)
			});
		}

		if(sheetSpec.animations) {
			sheetSpec.animations.forEach(animSpec => {
				const animation = createAnim(animSpec.frames, animSpec.frameLen);
				sprites.defineAnim(animSpec.name, animation);
			});
		}
		return sprites;
	})
}