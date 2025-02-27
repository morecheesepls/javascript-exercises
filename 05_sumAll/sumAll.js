const sumAll = function() {
    args = [...arguments].sort();
    expandedArray = [];
    sum = 0;
    
    for (arg of args) {
        if (arg < 0 || typeof arg !== "number" || !Number.isInteger(arg)) {
            return console.log("ERROR");
        } else {
            for (let i = args[0]; i <= args[1];) {
                expandedArray.push(i++);
            }
        }
    };

    for (num of expandedArray) {
        sum += num;
    }

    return console.log(sum);
};



sumAll(10, 15);

// Do not edit below this line
module.exports = sumAll;
