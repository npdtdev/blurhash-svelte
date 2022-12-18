<script lang="ts">
	import BlurHashCanvas from './BlurHashCanvas.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let hash: string;
	export let height: number = 128;
	export let width: number = 128;
	export let punch: number = 1;
	let className: string = '';
	export { className as class };
</script>

<div class={className ?? ''} style="--height:{height}px; --width:{width}px;">
	<BlurHashCanvas
		{hash}
		{height}
		{width}
		{punch}
		on:error={(ev) => {
			dispatch('error', ev);
		}}
	/>
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
</style>
