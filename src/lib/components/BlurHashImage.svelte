<script lang="ts">
	import BlurHashCanvas from './BlurHashCanvas.svelte';
	import { onMount } from 'svelte';
	import { lazy } from '$lib/utils/use-lazy.js';
	export let hash: string;
	export let height: number = 128;
	export let width: number = 128;
	export let punch: number = 1;
	export let src: string;
	export let srcset: string | null = null;
	export let alt: string | null;
	export let transitionDuration: number = 600;
	let isImageLoaded = false;
	export let useLazy: boolean = true;

	let imageElement: HTMLImageElement;

	onMount(() => {
		imageElement.onload = () => {
			isImageLoaded = true;
		};
		if (!useLazy) {
			imageElement.src = src;
		}
	});
</script>

<div style="height: {height}px; width: {width}px;" class={$$props.class || ''}>
	{#if hash}
		<BlurHashCanvas {hash} {width} {height} {punch} />
	{/if}
	<img
		style="transition: opacity {transitionDuration}ms ease-out;"
		use:lazy={useLazy ? { src: `${src}` } : {}}
		{srcset}
		{alt}
		class:loaded={isImageLoaded}
		bind:this={imageElement}
	/>
</div>

<style>
	div {
		position: relative;
	}
	img {
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0;
		object-fit: inherit;
		object-position: inherit;
	}

	.loaded {
		opacity: 1;
	}
</style>
