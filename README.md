# Blurhash svelte

Svelte component for blurhash images.

## Install

```
npm install -D blurhash-svelte
```

## Usage

The package includes two components:

### BlurHashImage

Component for rendering a blurhash image as placeholder while image loads.

1. Import the component

```
import { BlurHashImage } from 'blurhash-svelte'
```

2. Use the component

```
<BlurHashImage
 height={128}
 width={128}
 punch={1}
 src={"<YOUR-IMAGE-SRC>"}
 hash={"<YOUR-BLURHASH-STRING>"}
 useLazy={true}
>
```

### BlurHash

Component for rendering only the blurhash image.

1. Import the component

```
import { BlurHash } from 'blurhash-svelte'
```

2. Use the component

```
<BlurHash
 height={128}
 width={128}
 punch={1}
 hash={"<YOUR-BLURHASH-STRING>"}
>
```
