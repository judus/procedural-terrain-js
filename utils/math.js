export class Vec2 {
	constructor(x, y) {
		this.set(x, y);
	}

	set(x, y) {
		this.x = x;
		this.y = y;
	}
}

export function scale(n1, n2, saturation) {
	return Math.round((n1 - Math.floor(n1) * saturation * 10) * (n2 / 10))
}

export function smoothStep(edge0, edge1, x) {
	x = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
	return x * x * (3 - 2 * x);
}

export function clamp(x, lowerlimit, upperlimit) {
	if(x < lowerlimit)
		x = lowerlimit;
	if(x > upperlimit)
		x = upperlimit;
	return x;
}

export function constrain(n, low, high) {
	return Math.max(Math.min(n, high), low);
};

export function map(n, start1, stop1, start2, stop2, withinBounds) {
	const x = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
	if(!withinBounds) {
		return x;
	}
	if(start2 < stop2) {
		return constrain(x, start2, stop2);
	} else {
		return constrain(x, stop2, start2);
	}
}

