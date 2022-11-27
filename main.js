import Timer from "./utils/Timer.js";
import Mouse from "./utils/Mouse.js";
import KeyboardState from "./utils/KeyboardState.js";
import Camera from "./utils/Camera.js";
import {SetupMouse} from "./mouse.js";
import {SetupKeyboard} from "./keyboard.js";
import TerrainGenerator from "./TerrainGenerator.js";

// HTML container references
const HtmlContainer = document.getElementById('scene');
const HtmlSeeder = document.getElementById('seed');

// Config options
let FPS = 60;
let WIDTH = 1920 / 2;
let HEIGHT = 1080 / 2;
let SEED = HtmlSeeder.value;

// Instantiation
const timer = new Timer(1 / FPS);
const camera = new Camera(WIDTH, HEIGHT);
const mouse = new Mouse(WIDTH, HEIGHT);
const keyboard = new KeyboardState();
const scene = new TerrainGenerator(WIDTH, HEIGHT, SEED, camera, keyboard);

// When seed changes
['keyup', 'change'].forEach(e => {
	HtmlSeeder.addEventListener(e, () => {
		scene.seed = HtmlSeeder.value;
		scene.refresh();
	});
})

// Load the scene first and then start the timer
scene.load(() => {
	HtmlContainer.style.width = WIDTH;
	HtmlContainer.style.height = HEIGHT;
	HtmlContainer.append(scene.canvas);

	SetupKeyboard(keyboard, camera);
	SetupMouse(mouse, camera);

	mouse.listenTo(scene.canvas);

	timer.start();
});

// Update values
timer.update = function(deltaTime, tick, time) {
 // We don't have to rely on timing for this. We save the resources.
}

// FPS counter
let times = [];
let fps;

// Render the scene
timer.render = function(deltaTime, tick, time) {
	// Since we don't have to rely on timing for this demo
	camera.update(deltaTime);
	scene.update(deltaTime, tick, time);

	// The actual rendering
	scene.render(deltaTime, tick, time);

	// The FPS counter
	const now = performance.now();
	while(times.length > 0 && times[0] <= now - 1000) {
		times.shift();
	}
	times.push(now);
	fps = times.length;
	document.title = 'FPS: ' + fps;
}
