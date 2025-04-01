// create a loop that loops for the number of times passed to the function (num)
// loop starts at 1
// on each pass, add the current number to the previous number



const fibonacci = function(index) {
    let array = [1, 1];
    let result;
    index = Math.round(index);
    if (index === 0) {
        return 0;
    } else if (index < 0) {
        return "OOPS";
    } else {
        for (let i = 3; i <= index; i++) {
            result = array[array.length - 2] + array[array.length - 1];
            array.push(result);
        };
    };
    
    return array.at(-1);
};

console.log(fibonacci(-25));

// Do not edit below this line
module.exports = fibonacci;
