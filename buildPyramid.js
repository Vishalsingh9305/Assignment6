const buildPyramid = (num) => {
    let pyramid = '';
    // Loop through each row
    for (let i = 0; i < num; i++) {
        // Add spaces for left alignment
        for (let j = 0; j < num - i - 1; j++) {
            pyramid += ' ';
        }
        // Add stars for this row
        for (let k = 0; k <= i; k++) {
            pyramid += '* ';
        }
        // Move to the next line for the next row
        pyramid += '\n';
    }
    return pyramid;
};

// Test the function with a height of 6
console.log(buildPyramid(6));

module.exports = buildPyramid;
