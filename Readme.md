JavaScript Assignments
This repository contains JavaScript programs for various assignments, each designed to perform specific tasks.

Assignments :-

Build Pyramid of Stars File: buildPyramid.js Description: This program builds a pyramid of stars based on a given height. Usage javascript Copy code buildPyramid(6);

Convert an Array of Objects to an Object Based on a Key File: convertToObject.js Description: This program converts an array of objects into an object where keys are based on a specified property of the objects. Usage javascript Copy code console.log(convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')); // Output: { '1': { id: 1, value: 'abc' }, '2': { id: 2, value: 'xyz' } }

Flatten a Given n-Dimensional Array File: flattenArray.js Description: This program flattens a nested array of any depth into a single-dimensional array. Usage javascript Copy code console.log(flatten([1, [2, 3], [[4], [5]]])); // Output: [ 1, 2, 3, 4, 5 ]

Retrieve Details of Fruits by Name File: fruitsDetails.js Description: This program manages a list of fruits with properties (name, color, price per kg) and allows fast retrieval of details by fruit name. Usage javascript Copy code console.log(getDetails("apple")); // Output: Fruit color = red, Fruit price = 100