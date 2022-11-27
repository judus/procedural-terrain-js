import TileResolver from "./utils/TileResolver.js";

export function SetupMouse(mouse, camera) {
	let scrollingIsEnabled = true;

	mouse.boundaries(48, (x, y) => {
		scrollingIsEnabled && camera.move(x, y)
	});

	return {
		enableScrolling: (bool) => {
			scrollingIsEnabled = bool;
		}
	}
}



