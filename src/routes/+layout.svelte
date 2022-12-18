<main>
	<slot />
</main>

<style>
	@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

	:global(body) {
		@apply h-full overflow-hidden;
		font-family: 'Roboto', sans-serif;
	}
	:global(li) {
		margin-bottom: 6px;
	}
	:global(code) {
		margin-bottom: 12px;
	}
	:global(button) {
		margin-top: 4px;
	}
	:global(main) {
		padding-inline: 10px;
	}
</style>
