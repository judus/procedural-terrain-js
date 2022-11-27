export default class Timer {
	constructor(deltaTime = 1 / 30) {
		let accumulatedTime = 0;
		let lastTime = 0;
		let tick = 0;

		this.frameId = null;

		this.updateProxy = (time) => {
			accumulatedTime += (time - lastTime) / 1000;

			if (accumulatedTime > 1) accumulatedTime = 1;

			while(accumulatedTime > deltaTime) {
				this.update(deltaTime, tick, time);
				accumulatedTime -= deltaTime;
				tick++;
			}

			lastTime = time;
			this.render(deltaTime, tick, time);
			this.enqueue();
		}
	}

	enqueue() {
		this.frameId = requestAnimationFrame(this.updateProxy);
	}

	start() {
		this.enqueue();
	}

	stop() {
		let lastTime = 0;
		cancelAnimationFrame(this.frameId);
	}

	init() {}

	update(deltaTime, tick, time) {}

	render(deltaTime, tick, time) {}
}