// Define the list of fruits with their properties
const fruitList = [
    { name: "banana", color: 'yellow', pricePerKg: 50 },
    { name: "apple", color: 'red', pricePerKg: 100 },
    { name: "orange", color: 'orange', pricePerKg: 120 }
];

// Function to retrieve color and pricePerKg for a given fruit name
function getDetails(fruitName) {
    // Find the fruit object in the fruitList array
    const fruit = fruitList.find(fruit => fruit.name === fruitName);

    // Check if fruit is found
    if (fruit) {
        return {
            color: fruit.color,
            pricePerKg: fruit.pricePerKg
        };
    } else {
        // If fruit is not found, return null or handle as needed
        return null;
    }
}

// Example usage:
console.log(getDetails("apple")); // Output: { color: 'red', pricePerKg: 100 }
console.log(getDetails("banana")); // Output: { color: 'yellow', pricePerKg: 50 }
console.log(getDetails("orange")); // Output: { color: 'orange', pricePerKg: 120 }
console.log(getDetails("grape")); // Output: null (fruit not found)
