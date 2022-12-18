<script lang="ts">
	import BlurHashCanvas from './BlurHashCanvas.svelte';
	export let hash: string;
	export let height: number;
	export let width: number;
	export let punch: number = 1;
</script>

<div style="height: {height}px; width: {width}px;">
	<BlurHashCanvas {hash} {height} {width} {punch} />
</div>

<style>
	div {
		position: relative;
		height: var;
	}
</style>
