export function createDecorationLayer(canvas, context, scene) {
	return {
		canvas: canvas,
		context: context,
		width: scene.width,
		height: scene.height,
		lazy: true,

		render: function(deltaTime, tick, time) {
			context.clearRect(0, 0, scene.width, scene.width);

			scene.tiles.forEach(tile => {

				if(tile.type.isBorder || tile.type.decoration === undefined) return;

				const startX = tile.x1 + (scene.camera.pos.x * -1);
				const startY = tile.y1 + (scene.camera.pos.y * -1);
				const spriteSheet = scene.sprites.get(tile.type.decoration.sprite)
				const img = tile.type.decoration.img;
				const height = spriteSheet.tiles.get(img)[0].height;

				spriteSheet.draw(img, context, startX, startY - height + scene.tileSize);
			});
		},

	}
}
