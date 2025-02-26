const reverseString = function() {
    text = "hello there";
    text = text.split("");
    text = text.reverse();
    text = text.join("");

    return text; 
};

console.log(reverseString());


// Do not edit below this line
module.exports = reverseString;
