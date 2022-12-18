<script lang="ts">
	import { onMount } from 'svelte';
	import { decode } from 'blurhash';

	export let hash: string;
	export let height = 128;
	export let width = 128;
	export let punch = 1;

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const pixels = decode(hash, width, height, punch);
		const ctx = canvas.getContext('2d');
		const imageData = ctx!.createImageData(width, height);
		imageData.data.set(pixels);
		ctx!.putImageData(imageData, 0, 0);
	});
</script>

<canvas bind:this={canvas} {height} {width} />

<style>
	canvas {
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>
