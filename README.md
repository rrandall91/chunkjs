# ChunkJS

ChunkJS is a minimal library that splits arrays into smaller chunks or batches.

## Installation

```bash
npm install chunkjs
```

or using Yarn

```bash
yarn add chunkjs
```

## Usage

ChunkJS is comprised of two functions: `createChunks` and `createBatches`:

```javascript
createChunks(array, numberOfChunks);

createBatches(array, numberOfElementsPerBatch);
```

### Examples

To split an array into an _n_ number of chunks (default size is 2):

```javascript
const { createChunks } = require("chunkjs");

createChunks([ 1, 2, 3, 4, 5, 6 ], 2);
// returns [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

```

To split an array into batches with _n_ number of elements (default size is 2):

```javascript
const { createBatches } = require("chunkjs");

createBatches([ 1, 2, 3, 4, 5, 6 ], 2);
// returns [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
```
