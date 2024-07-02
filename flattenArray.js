const flatten = (arr) => {
    let result = [];

    arr.forEach(element => {
        if (Array.isArray(element)) {
            // Recursively flatten nested arrays
            result = result.concat(flatten(element));
        } else {
            // Add non-array elements directly
            result.push(element);
        }
    });

    return result;
};

// Example usage:
console.log(flatten([1, [2, 3], [[4], [5]]])); // Output: [ 1, 2, 3, 4, 5 ]

module.exports = flatten;
