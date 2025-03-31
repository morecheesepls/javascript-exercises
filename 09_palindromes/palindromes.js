// remove all special characters
// remove all spaces
// convert to lowercase
// reverse the string and store in new variable
// compare the converted old and new string, return true/false


const palindromes = function (string) {
    let cleanedString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reversedString = cleanedString.split("").reverse().join("").toLowerCase();
    if (cleanedString == reversedString) {
        return true;
    } else {
        return false;
    }
};

console.log(palindromes('Animal loots foliated detail of stool lamina.'));

// Do not edit below this line
module.exports = palindromes;
