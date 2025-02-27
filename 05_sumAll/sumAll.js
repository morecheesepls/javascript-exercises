const sumAll = function() {
    args = [...arguments].sort();
    console.log(args);
    
    const newArray = function() {
        for (arg of args) {
            if (arg < 0 || typeof arg !== "number" || !Number.isInteger(arg)) {
                return console.log("ERROR");
            }
        }
    }

    return newArray();

};

sumAll(1, 10);

// Do not edit below this line
module.exports = sumAll;
