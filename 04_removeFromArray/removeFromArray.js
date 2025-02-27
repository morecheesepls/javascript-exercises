const removeFromArray = function() {
    args = [...arguments]; // convert the arguments into a real array
    argRest = []; // stores all arguments after the first in its own array
    finalArray = []; 
    
    for (arg of args) {
        if (arg !== args[0]) {
            argRest.push(arg);
        }
    };

    for (num of args[0]) {
        if (!argRest.includes(num)) {
            finalArray.push(num);
        }
    };
    
    return finalArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
