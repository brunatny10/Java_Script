const n = 3;
const calc = [];

/**
 * Write your code below!
 */

for (let i = 1; i <= n; i++) {
    let col = [];
    for(let j = 1; j <= n; j++){
        col.push('${i} * ${j} = ${i*j}');
    }
    calc.push(col);
}