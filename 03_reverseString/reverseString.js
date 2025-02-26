let text = "";

const reverseString = function(text) {
    text = text.split("");
    text = text.reverse();
    text = text.join("");

    return text; 
};

console.log(reverseString("hello"));


// Do not edit below this line
module.exports = reverseString;
