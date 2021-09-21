const numbers = [];
const columns = 4;
const rows = 5;

/**
 * Write your code below!
 */
for (let i = 0; i < rows; i++) {
    const roiw = [];
    for (let j = 1; j <= columns; j++) {
        roiw.push(i * columns + j);
    }
    numbers.push(roiw);
}
console.log(numbers);