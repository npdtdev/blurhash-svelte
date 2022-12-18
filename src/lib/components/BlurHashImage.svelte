<script lang="ts">
	import BlurHashCanvas from './BlurHashCanvas.svelte';
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	export let hash: string;
	export let height: number = 128;
	export let width: number = 128;
	export let punch: number = 1;
	export let src: string;
	export let alt: string | null;
	export let transitionDuration: number = 600;
	export let objectFit: 'contain' | 'cover' | undefined = undefined;
	let className: string = '';
	export { className as class };
	const dispatch = createEventDispatcher();
	async function fetchImageData() {
		try {
			const res = await fetch(src);
			const blob = await res.blob();
			return URL.createObjectURL(blob);
		} catch (err) {
			error = err ?? true;
			dispatch('error', err);
		}
	}
	let error: any | undefined = undefined;
</script>

<div
	class={className ?? ''}
	style="
	--height:{height}px;
	--width:{width}px;
	{objectFit ? `--object-fit: ${objectFit};` : ''}"
>
	{#if hash}
		<BlurHashCanvas
			{hash}
			{width}
			{height}
			{punch}
			on:error={(ev) => {
				dispatch('error', ev);
			}}
		/>
	{/if}
	{#await fetchImageData() then d}
		<img
			{width}
			{height}
			style="--height:{height}px; --width:{width}px;"
			transition:fade={{ duration: transitionDuration }}
			{alt}
			src={d}
		/>
	{/await}
	{#if error}
		<div>
			<slot name="error" />
		</div>
	{/if}
</div>

<style>
	div {
		position: relative !important;
		max-width: var(--width);
		max-height: 100%;
		height: var(--height);
		object-fit: var(--object-fit, contain);
		object-position: center;
	}
	img {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		object-fit: inherit;
		object-position: inherit;
		border-radius: inherit;
		width: 100%;
		height: var(--width);
	}
</style>
