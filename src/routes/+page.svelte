<script lang="ts">
	import { BlurHash, BlurHashImage } from '../lib/index';
	const hash = 'VNEVf|?aTJkqtR~VxGR+OYShyDt7n$WBbb%MXmSf$Nso';
	const src = 'https://blur.npdt.dev/_app/immutable/assets/example-8f1db4f1.jpg';
</script>

<h1>Blurhash svelte img</h1>
<a href="https://github.com/npdtdev/blurhash-svelte"
	><span class="d-none d-sm-inline">View on GitHub </span><svg
		width="16"
		height="16"
		viewBox="0 0 16 16"
		aria-hidden="true"
		><path
			fill-rule="evenodd"
			d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
		/></svg
	></a
>
<p>Svelte component for blurhash images.</p>
<ul>
	<li>
		<a href="#install">Install</a>
	</li>
	<li>
		<a href="#how-to-use">How to use</a>
	</li>

	<li>
		<a href="#extra">Extra</a>
	</li>
</ul>
<h2 id="install">Install</h2>
<code> npm install -D blurhash-svelte </code>

<h2 id="how-to-use">How to use</h2>
<p>The package includes two components:</p>
<h3>BlurHashImage</h3>
<p>Component for rendering a blurhash image as placeholder while image loads.</p>
<ol>
	<li>
		Import the component <br /><code>
			{"import { BlurHashImage } from 'blurhash-svelte' "}
		</code>
	</li>

	<li>
		Use the component
		<br /><code>
			{"<BlurHashImage height={300} width={300} src={'<YOUR-IMAGE-SOURCE>'} alt={'<YOUR-IMAGE-ALT>'} hash={'<YOUR-HASH-STRING>'} />"}
		</code>
	</li>
	<li>
		Extra: You can modify the fadein transition duration with the 'transitionDuration' property
		<br /><code>
			{'<BlurHashImage ... transitionDuration={1000}/>'}
		</code>
	</li>
	<code />
</ol>
<BlurHashImage height={300} width={300} {src} alt={'Example of loading an image'} {hash} />

<h3>BlurHash</h3>
<p>Component for rendering only the blurhash image.</p>
<ol>
	<li>
		Import the component <br /><code>
			{"import { BlurHash } from 'blurhash-svelte' "}
		</code>
	</li>

	<li>
		Use the component
		<br /><code>
			{"<BlurHash height={300} width={300} punch={1} hash={'<YOUR-BLURHASH-STRING>'}/>"}
		</code>
	</li>
	<code />
</ol>
<BlurHash height={300} width={300} punch={1} {hash} />

<h2 id="extra">Extra</h2>

<h3>Generating blurhash strings</h3>
<p>
	You can generate blurhash string in <a href="	https://blur.npdt.dev/">here</a>
</p>
