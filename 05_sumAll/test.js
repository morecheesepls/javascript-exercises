const myFunction = function() {
    args = [...arguments];
    let arr = [];

    for (let i = args[0]; i <= args[1]; i++) {
        arr.push(i);  
    };
    return arr;  
};

console.log(myFunction(10, 15));