const removeFromArray = function() {
    args = [...arguments]; // convert the arguments into a real array
    
    for (arg of args) {
        if (arg !== args[0]) {
            console.log(notArgOne = arg);
        }
        continue;
    }

    for (arg of args[0]) {
        if (notArgOne === arg) {
            return console.log(newArray = args[0].slice(arg));
        }
    }
};



removeFromArray([1, 2, 3, 4], 3, 5, 7, 9);

// Do not edit below this line
module.exports = removeFromArray;
