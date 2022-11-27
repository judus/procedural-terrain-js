import Keyboard from "./utils/KeyboardState.js";

export function SetupKeyboard(keyboard, camera) {

	keyboard.listenTo(window);

	keyboard.addMapping('KeyD', keyState => {
		if(keyState) {
			camera.vel.x = 1;
		} else {
			camera.vel.x = 0;
		}
	});

	keyboard.addMapping('KeyA', keyState => {
		if(keyState) {
			camera.vel.x = -1;

		} else {
			camera.vel.x = 0;
		}
	});

	keyboard.addMapping('KeyW', keyState => {
		if(keyState) {
			camera.vel.y = -1;
		} else {
			camera.vel.y = 0;
		}
	});

	keyboard.addMapping('KeyS', keyState => {
		if(keyState) {
			camera.vel.y = 1;
		} else {
			camera.vel.y = 0;
		}
	});

	return keyboard;
}
