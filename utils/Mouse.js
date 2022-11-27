import {Rectangle} from "./Rectangle.js";
import {Vector2d} from "./Vector2d.js";

function htmlToElement(html) {
	var template = document.createElement('template');
	html = html.trim();
	template.innerHTML = html;
	return template.content.firstChild;
}

export default class Mouse {
	constructor(width, height, x, y) {
		// Mouse boundaries = size of element listening to
		this.rec = new Rectangle(width, height, x, y);
		// Mouse position relative to window
		this.real = new Vector2d(1, 1);
		// Mouse position relative to element
		this.pos = new Vector2d(0, 0);
		// Mouse position scaling, 1 for no scaling
		this.sca = new Vector2d(1, 1);
		// Last mouse down (click) relative to element
		this.md = new Vector2d();
		// Last mouse up (click) relative to element
		this.mu = new Vector2d();
		// Drawn mouse selection relative to element
		this.sel = new Rectangle();
		// Whether the mouse is within boundaries
		this.isInBound = false;

		const self = this

		document.addEventListener('mousemove', evt => {
			self.real.set(evt.clientX, evt.clientY);

			self.isInBound =
				(self.real.x - self.rec.x) * self.sca.x >= 0 &&
				(self.real.x - self.rec.x) * self.sca.x <= self.rec.width &&
				(self.real.y - self.rec.y) * self.sca.y >= 0 &&
				(self.real.y - self.rec.y) * self.sca.y <= self.rec.height;
		});
	}

	set(element) {
		this.element = element;

		this.rec.set(
			element.getBoundingClientRect().width,
			element.getBoundingClientRect().height,
			element.getBoundingClientRect().left,
			element.getBoundingClientRect().top
		)
	}

	listenTo(element) {
		this.set(element);

		element.addEventListener('mousemove', evt => {
			this.pos.set(
				Math.floor((evt.clientX - this.rec.x) * this.sca.x),
				Math.floor((evt.clientY - this.rec.y) * this.sca.y)
			);
		});

		element.addEventListener('mousedown', evt => {
			this.md.set(
				Math.floor((evt.clientX - this.rec.x) * this.sca.x),
				Math.floor((evt.clientY - this.rec.y) * this.sca.y)
			);
		});

		element.addEventListener('mouseup', evt => {
			this.mu.set(
				Math.floor((evt.clientX - this.rec.x) * this.sca.x),
				Math.floor((evt.clientY - this.rec.y) * this.sca.y)
			);

			this.sel.set(
				Math.abs(this.mu.x - this.md.x),
				Math.abs(this.mu.y - this.md.y),
				this.md.x < this.mu.x ? this.md.x : this.mu.x,
				this.md.y < this.mu.y ? this.md.y : this.mu.y,
			);
		});

	}

	event(event, callback) {
		this.element.addEventListener(event, evt => {
			callback(evt);
		});
	}

	menu(actions) {
		const self = this;

		document.addEventListener('contextmenu', evt => {

			evt.preventDefault();

			if(self.contextMenu !== undefined) {
				self.contextMenu.remove();
			} else {
				if(self.isInBound) {
					self.contextMenu = htmlToElement('<ul class="mouse"></ul>');

					actions.forEach(item => {
						let action = htmlToElement('<li>' + item.label + '</li>')
						action.style.cursor = 'pointer';
						action.style.padding = '5px 8px';

						action.addEventListener('mousedown', evt => {
							self.contextMenu.remove();
							item.action(evt);
						})

						self.contextMenu.append(action);
					});

					self.contextMenu.style.position = 'absolute';
					self.contextMenu.style.left = evt.clientX + 'px';
					self.contextMenu.style.top = evt.clientY + 'px';
					self.contextMenu.style.backgroundColor = 'gray';
					self.contextMenu.style.fontFamily = 'sans-serif';
					self.contextMenu.style.fontSize = '12px;';
					self.contextMenu.style.listStyle = 'none';
					self.contextMenu.style.margin = 0;
					self.contextMenu.style.padding = 0;

					document.body.append(self.contextMenu);
				}
			}

			return false;

		}, false);

	}

	boundaries(size, callback) {
		document.addEventListener('mousemove', evt => {
			let x = 0, y = 0;

			let timer;

			if(this.isInBound) {
				const self = this;

				const timer = setTimeout(() => {

					if(self.isInBound) { // Still inBound after time out?
						if(this.pos.x < size) {
							x = -1;
						}

						if(this.pos.x > this.rec.width - size) {
							x = 1;
						}

						if(this.pos.y < size) {
							y = -1;
						}

						if(this.pos.y > this.rec.height - size) {
							y = 1;
						}
					}
					callback(x, y);

				}, 1000);
			}

			clearTimeout(timer);
		});
	}

	real() {
		return [
			this.pos.x,
			this.pos.y
		]
	}

	position() {
		return [
			this.pos.x,
			this.pos.y
		]
	}

	selection() {
		return [
			this.sel.x,
			this.sel.y,
			this.sel.width,
			this.sel.height,
		]
	}
}
