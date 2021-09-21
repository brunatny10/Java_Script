

/**
 * Write your code below!
 */
function draw (numberOfElements) {
    for (let i = 0; i < numberOfElements; i++) {
        var row = "";
        for (let  j = 0; j <= i; j++) {
            row = row.concat('*');
        }
        console.log(row);
    }
}
draw(5);