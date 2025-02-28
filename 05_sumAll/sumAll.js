const sumAll = function() {
    args = [...arguments].sort();
    expandedArray = [];
    sum = 0;
    
    for (arg of args) {
        if (arg < 0 || typeof arg !== "number" || !Number.isInteger(arg)) { // Error Checks
            return console.log("ERROR");
        } else {
            for (let i = args[0]; i <= args[1]; i++) { // Fill in range between the given arguments and assign to its own array
                expandedArray.push(i);
            };
            
            for (num of expandedArray) { // Loops through new array and add to sum with each loop
                sum += num;
            };

            return sum;
        };
    };
};

console.log(sumAll(10, 15));

// Do not edit below this line
module.exports = sumAll;
