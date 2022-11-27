export function createCanvas(width, height, id) {
	const canvas = document.createElement("canvas");
	canvas.setAttribute('width', width);
	canvas.setAttribute('height', height);

	if (id !== undefined) {
		canvas.setAttribute('id', id);
	}

	return canvas;
}