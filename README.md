# reduce

[![version](https://img.shields.io/npm/v/@antoniovdlc/reduce.svg)](http://npm.im/@antoniovdlc/reduce)
[![issues](https://img.shields.io/github/issues-raw/antoniovdlc/reduce.svg)](https://github.com/AntonioVdlC/reduce/issues)
[![downloads](https://img.shields.io/npm/dt/@antoniovdlc/reduce.svg)](http://npm.im/@antoniovdlc/reduce)
[![license](https://img.shields.io/npm/l/@antoniovdlc/reduce.svg)](http://opensource.org/licenses/MIT)

Custom reduce functions.

## Installation

This package is distributed via npm:

```
npm install @antoniovdlc/reduce
```

## Motivation

Reducing arrays to a single value is a common operation in JavaScript. This library abstracts away some of the most common reduce operations.

## Usage

You can use this library either as an ES module or a CommonJS package:
```js
import { sum, average, groupBy } from "@antoniovdlc/reduce";
```
*- or -*
```js
const { sum, average, groupBy } = require("@antoniovdlc/reduce");
```

## Examples

All reduce functions can be used out of the box for computing single values as follows:

```js
import { sum } from "@antoniovdlc/reduce";

const arr = [1, 2, 2, 13, 20, 4];
arr.reduce(sum); // 42
```

All reduce functions provide a `.on("key")` function which allows to compute single values from arrays of objects by nested fields:

```js
const arr = [
  { name: "Bob", age: 25 },
  { name: "Alice", age: 38 },
  { name: "Tom", age: 60 },
  { name: "Candice", age: 45 },
];
arr.reduce(average.on("age")); // 42
```

> Note that if you are using TypeScript, you need to pass an initialization value:
> `arr.reduce(average.on("age"), 0); // 42`

## Reduce functions

Here is a list of provided reduce functions:

### sum
Computes the sum of all the elements in an array.

### average
Computes the average of all the elements in an array.

### groupBy
Generates an object from an array of objects, where the keys correspond to the values of the first argument, and the value corresponds to the object itself.

## License
MIT
