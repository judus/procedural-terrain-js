export function createBackgroundLayer(canvas, context, scene) {

	const sprite = scene.sprites.get('terrain');

	return {
		canvas: canvas,
		context: context,
		width: scene.width,
		height: scene.height,
		lazy: true,

		render: function() {
			context.clearRect(0, 0, scene.width, scene.height);

			scene.tiles.forEach(tile => {
				const startX = tile.x1 + (scene.camera.pos.x * -1);
				const startY = tile.y1 + (scene.camera.pos.y * -1);

				context.beginPath();
				context.fillStyle = tile.type.color;
				context.fillRect(startX, startY, tile.x2 - tile.x1, tile.y2 - tile.y1);

				if( ! tile.type.isBorder || tile.type.img === undefined) return;

				sprite.draw(tile.type.img[tile.variant], context, startX, startY);
			});
		},
	}
}
