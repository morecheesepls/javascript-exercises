const sumAll = function() {
    args = [...arguments].sort();
    expandedArray = [];
    
    for (arg of args) {
        if (arg < 0 || typeof arg !== "number" || !Number.isInteger(arg)) {
            return console.log("ERROR");
        } else {
            for (let i = args[0]; i <= args[1]; i++) {
                expandedArray.push(i);
            }

            return console.log(expandedArray);
        }
    };



};



sumAll(1, 10);

// Do not edit below this line
module.exports = sumAll;
