<script lang="ts">
	import { onMount } from 'svelte';
	import { decode } from 'blurhash';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let hash: string;
	export let height = 128;
	export let width = 128;
	export let punch = 1;

	let canvas: HTMLCanvasElement;

	onMount(() => {
		try {
			const pixels = decode(hash, width, height, punch);
			const ctx = canvas.getContext('2d');
			const imageData = ctx!.createImageData(width, height);
			imageData.data.set(pixels);
			ctx!.putImageData(imageData, 0, 0);
		} catch (err) {
			dispatch('error', err);
		}
	});
</script>

<canvas bind:this={canvas} {height} {width} />

<style>
	canvas {
		height: var(--width);
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		object-fit: inherit;
		object-position: inherit;
		border-radius: inherit;
	}
</style>
