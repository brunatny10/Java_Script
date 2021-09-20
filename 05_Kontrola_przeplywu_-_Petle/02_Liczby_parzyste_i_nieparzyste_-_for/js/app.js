const n = 13;

/**
 * Write your code below!
 */
const even = "-even";
const odd = "-odd";

for (let i = 0; i <= n; i++) {
    if (i % 2 === 0){
        console.log(i + even);
    }
    else if (i % 2 !== 0){
        console.log(i + odd);
    }
}
