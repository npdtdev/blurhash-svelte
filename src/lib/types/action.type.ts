export type Action<Params = any> = (
	node: HTMLElement,
	parameters?: Params
) => {
	update?: (parameters: Params) => any | void;
	destroy?: () => void;
};
