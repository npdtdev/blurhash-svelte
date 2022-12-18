import type { Action } from '../types/action.type.js';

const nodeAttributesMap = new WeakMap<HTMLElement, object>();
let loadObserver: IntersectionObserver;
const intersection_handler: IntersectionObserverCallback = (entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting && entry.target instanceof HTMLElement) {
			const node = entry.target;
			Object.assign(node, nodeAttributesMap.get(node));
			loadObserver.unobserve(node);
		}
	});
};
const observer = () => (loadObserver ??= new IntersectionObserver(intersection_handler));

export function lazy(
	node: HTMLElement,
	attributes: Record<string, number | string>
): ReturnType<Action> {
	nodeAttributesMap.set(node, attributes);

	observer().observe(node);

	return {
		destroy() {
			observer().unobserve(node);
		}
	};
}
