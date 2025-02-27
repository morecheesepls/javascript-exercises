const removeFromArray = function() {
    args = [...arguments]; // convert the arguments into a real array
    argOne = args[0]; // stores only the first argument as a variable
    argRest = []; // stores all arguments after the first in its own array
    
    for (arg of args) {
        if (arg !== args[0]) {
            argRest.push(arg);
        }
    };

    // if (argOne === argRest) {
    //     console.log("There is nothing to remove.");
    // } else if (argOne !== argRest) {
    //     finalArray = argRest.forEach(argOne.filter());
    // }; 

    // console.log(finalArray);

    argRest.forEach((element) => console.log(argOne.slice(element)));


};

removeFromArray([1, 2, 3, 4], 3, 5, 7, 9);

// Do not edit below this line
module.exports = removeFromArray;
