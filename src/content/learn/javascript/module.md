---
title: 'Module'
date: '2020-08-03'
---

- **Share code** among JavaScript files.
- exporting parts of a file for use in one or more other files,
- importing the parts you need, where you need them.
- In order to take advantage of this functionality, you need to create a script in your HTML document with a type of module.
  - `<script type='module' src='filename.js'></script>`

## Export module

```js
// Export a single function
export const add = (x, y) => x + y;

// or place them all in the export statement
export { add, subtract };
```

If only one value is exported from a file, use `export default`

## Import module

- `import` will find `add` and `subtract` in `math.js`.
- import only two functions to use, and ignore the rest.

```js
// to import specific functions
import { add, subtract } from './math.js';
```

- `import * as`
  - import everything from a file
  - use function like `module.func`

```js
// to import all
import * as myMathModule from './math.js';

myMathModule.add(2, 5);
myMathModule.subtract(10, 3);
```

- `import func from './module.js';`
  - import a default export