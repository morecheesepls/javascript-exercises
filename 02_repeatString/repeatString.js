const num = Math.floor(Math.random() * 1000); // assigns a random number from 0 to 999

function repeatString(word, num) {
    if (num < 0) {
        console.log(word = "ERROR");
        return word;
    } else if (num === 0) {
        console.log(word = "");
        return word;
    } else if (num > 0) { // if num is > 0, add word to wordArray, then join all strings in wordArray so that no spaces exist. 
        wordArray = [];

        for (let i = 0; i < num; i++) {
            wordArray.push(word);
        }

        for (item of wordArray) {
            console.log(newArray = wordArray.join(""));
        }
        return newArray;
    }
};

repeatString("", num);


// Do not edit below this line
module.exports = repeatString;
